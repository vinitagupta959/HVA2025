const Book = require('../model/Book');

async function createBook(req, res) {
    try {

        const existingBook = await Book.findOne({
            isbn: req.body.isbn
        })

        if (existingBook) {
            return res.status(400).json({
                ok: false,
                message: "Book with this ISBN already exists"
            })
        }
        const book = await Book.create(req.body);
        return res.status(201).json({
            ok: true,
            data: book,
            message: "Book Created"
        })

    } catch (err) {
        return res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}

async function getAllbook(req, res) {
    try {
        let books = await Book.find()
        return res.status(200).json({
            ok: true,
            data: books,
            message: "All books fetched"
        })
    } catch (err) {
        return res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}


async function getBookById(req, res) {
    try {

        const book = await Book.findById(req.params.id)
        if (book) {
            return res.status(200).json({
                ok: true,
                data: book,
                message: "Book fetched"
            })
        } else {
            return res.status(404).json({
                ok:false,
                message: "Not found"
            })
        }

    } catch (err) {
        return res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}

async function updateBookById(req, res) {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true, runValidators:true
            })

        if (updatedBook) {
            return res.status(200).json({
                ok: true,
                data: updatedBook,
                message: "Book Updated"
            })
        } else {
            return res.status(404).json({
                ok: false,
                message: "Not found"
            })
        }
    } catch (err) {
        return res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}

async function deletedBookById(req, res) {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (book) {
            return res.status(200).json({
                ok: true,
                data: book,
                message: "Book deleted"
            })
        } else {
            return res.status(404).json({
                ok: false,
                message: "Not found"
            })
        }

    } catch (err) {
        return res.status(400).json({
            ok: false,
            message: err.message
        })
    }
}


module.exports={createBook,getAllbook,getBookById,updateBookById,deletedBookById}