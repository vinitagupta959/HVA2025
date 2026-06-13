const Student = require('../model/Student');

async function createStudent(req,res) {
    try {
        const student = await Student.create(req.body);
        return res.status(201).json({
            ok: true,
            data: student,
            message: "Student created",
        });
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message,
        });
    }
}

async function getStudents(req, res) {
    try {
        const students = await Student.find();
        return res.status(200).json({
            ok: true,
            data: students,
            message: "All student fetched"
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            message: err.message,
        });
    }
}

async function getStudentById(req, res) {
  try {
    const student = await Student.findById(req.params.id);
    if (student) {
      res.status(200).json({
        ok: true,
        data: student,
        message: "Student Fetched",
      });
    } else {
      res.status(404).json({
        ok: false,
        message: "Student not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      ok: false,
      message: err.message,
    });
  }
}



async function updateStudentById(req, res) {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body,
      {
        new: true,
        runValidators: true
      })
    if (student) {
      return res.status(200).json({
        ok: true,
        data: student,
        message: "Student updated"
      })
    } else {
      return res.status(400).json({
        ok: false,
        message: "Student Not Found"
      })
    }
  } catch (err) {
    res.status(400).json({
      ok: false,
      message: err.message
    })
  }

}

async function deleteStudentById(req, res) {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (student) {
      return res.status(200).json({
        ok: true,
        message: "Student Deleted"
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: "Student Not Found"
      })
    }

  } catch (err) {
    res.status(400).json({
      ok: false,
      message: err.message
    })
  }
}


module.exports={createStudent,getStudents,getStudentById,updateStudentById,deleteStudentById}