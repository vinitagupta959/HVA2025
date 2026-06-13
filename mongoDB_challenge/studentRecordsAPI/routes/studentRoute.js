const express=require('express');
const router=express.Router();
const {createStudent,getStudents,getStudentById,updateTaskById,deleteStudentById}=require('../controller/studentController');


router.post('/students',createStudent);
router.get('/students',getStudents);
router.get('/students/:id',getStudentById);
router.put('/students/:id',updateTaskById);
router.delete('/students/:id',deleteStudentById);

module.exports=router