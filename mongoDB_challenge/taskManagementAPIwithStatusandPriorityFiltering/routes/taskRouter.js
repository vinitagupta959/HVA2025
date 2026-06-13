const express=require('express');
const router=express.Router();
const  { createTask,getTasks,getTaskbyId,updateTaskById,deleteTaskById }=require('../controller/taskController');

router.post('/tasks',createTask);
router.get('/tasks',getTasks);
router.get('/tasks/:id',getTaskbyId);
router.put('/tasks/:id',updateTaskById);
router.delete('/tasks/:id',deleteTaskById);


module.exports=router
