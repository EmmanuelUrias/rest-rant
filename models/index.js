require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => {console.log('connected', process.env.MONGO_URI)})

module.exports.Place = require('./places')
