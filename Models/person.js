const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Creatig new Schema
const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 30
    },
    favoriteFoods: [String]
});

//Creating a Model for Our Schema
module.exports = mongoose.model('person', personSchema);