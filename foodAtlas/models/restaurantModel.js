const mongoose = require('mongoose');

//สร้าง schema
const restaurantSchema = new mongoose.Schema({
    id:Number,
    name: String,
    imageURL: String,
    type: String
});

//สร้าง model
const Restaurant =  mongoose.model('Restaurant',restaurantSchema);

module.exports = Restaurant;


