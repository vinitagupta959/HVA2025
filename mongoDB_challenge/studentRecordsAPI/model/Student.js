const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true,
        unique: true
    }, age: {
        type: Number,
        required: true,
        min: 5
    }, grade: {
        type: String,
        required: true
    }, enrolled: {
        type: Boolean,
        required: true
    }
})


module.exports = mongoose.model("studentSchema", studentSchema)