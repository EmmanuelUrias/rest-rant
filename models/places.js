// require mongoose
const mongoose = require('mongoose')

//creating shorthand for the schema constructor
const { Schema } = mongoose

const placeSchema = new Schema ({
    name: {type: String, require: true},
    pic : {type: String, default: 'https://placekitten.com/250/250'},
    cuisines: {type: String, require: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: Number
})

// Goes after schema
const place = mongoose.model('Place', placeSchema)

module.exports = place
