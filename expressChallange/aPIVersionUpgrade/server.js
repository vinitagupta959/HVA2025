const express=require('express');
const app=express();
const v1UserRoutes = require("./routes/v1/userRoutes");
const v2UserRoutes = require("./routes/v2/userRoutes");

app.use(express.json());
app.use("/api/v1/users", v1UserRoutes);
app.use("/api/v2/users", v2UserRoutes);


app.listen(3000,function(){
console.log("Server is running on the port number 3000");

})