const express = require('express');
const { use } = require('react');
const app = express()
app.use(express.json());

let users=[]

app.get('/api/v1/users', function (req, res, next) {
    let { search, page, limit, sort, order } = req.query
    console.log(req.query);
    page = Number(page) || 1;
    limit = Number(limit) || 10;
    sort = sort || "id";
    order = order || "asc";
    console.log(page, limit, sort, order);
    let errors = [];
    if (page <= 0) {
        errors.push({ field: "page", message: "Invalid page" });
    }

    if (1 > limit || limit > 50) {
        errors.push({ field: "limit", message: "Invalid limit" });
    }
    if (sort !== "id" && sort !== "name" && sort !== "email") {
        errors.push({ field: "sort", message: "Invalid sort" });
    }

    if (order !== "asc" && order !== "desc") {
        errors.push({ field: "order", message: "Invails order" })
    }
    if (errors.length > 0) {
        return next({ status: 400, errors });
    }

    let filteredUSers=users;
if(search){
    filteredUSers=users.filter(function(user){
        return (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()))
    })
}
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        data: err.errors || null,
        message: err.message || "Server Error",
    });
});


app.listen(3000, function () {
    console.log("Server is running on the  port number 3000");

})
