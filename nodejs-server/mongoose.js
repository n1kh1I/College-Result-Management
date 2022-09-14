const mongoose = require('mongoose')

const dbHost = 'mongodb://127.0.0.1:27017/'
const dbName = 'logineers'
const dbUrlDev = dbHost + dbName

mongoose.connect(process.env.MONGODB_URL || dbUrlDev,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(res => console.log('Connected to mongodb'))
  .catch(err => console.log(err.message || err))

module.exports = mongoose
