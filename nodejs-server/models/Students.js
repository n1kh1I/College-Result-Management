const mongoose = require('mongoose')

const roles = {
    STUDENTS: 'Students'
}

const schema = new mongoose.Schema({
    
    name: {
        type: String,
        trim: true
    },
    admNo: {
      type: String,
      trim: true,
    },
    course:{
        type: String,
        trim : true
    },
    courseDuration:{
        type: String,
        trim : true,
    },
    yearOfAdmission:{
        type : String,
        trim: true,
    },
    semNo:{
        type: String,
        trim : true
    },
    semType:{
        type:String,
        trim : true
    },
    semSession:{
        type:String,
        trim:true
    },
    department:{
        type:String,
        trim:true
    },
    subjects: [
        {
            subName: String,
            code: String,
            instructor: String,
            marks: String
        }
    ]
},
{
    timestamps: true
})

schema.pre('save', function (next) {
  const students = this
  const rolesSet = new Set(students.roles)
  students.roles = [...rolesSet]
  next()
})

const Student = mongoose.model('Students', schema, 'students')
module.exports = Student
