const mongoose = require('mongoose')

const roles = {
    DEAN: 'Dean',
    ADEAN: 'aDean',
    INSTRUCTOR: 'Instructor'
}

const schema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, // faculty error
    trim: true,
    immutable: true
  },
  name: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    enum: Object.values(roles),
    trim: true
  },
  password: {
    type: String
  }
},
{
    timestamps: true
})

schema.pre('save', function (next) {
  const user = this
  const rolesSet = new Set(user.roles)
  user.roles = [...rolesSet]
  next()
})

const User = mongoose.model('User', schema, 'users')
module.exports = User
