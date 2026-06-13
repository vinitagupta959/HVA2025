const express=require('express');
const router=express.Router();
const {createBook,getAllbook,getBookById,updateBookById,deletedBookById}=require('../controller/bookController');

router.post('/books',createBook);
router.get('/books',getAllbook);
router.get('/books/:id',getBookById);
router.put('/books/:id',updateBookById);
router.delete('/books/:id',deletedBookById)

module.exports=router;