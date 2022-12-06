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
    founded: {type: Number, min: [803, `According to google it doesn't get older than this`], max: [new Date().getFullYear(), ` Hey time traveller this restuarant doesn't exist yet`]}
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

// Goes after schema
module.exports = mongoose.model('Place', placeSchema)

