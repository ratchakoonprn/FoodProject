const mongoose = require('mongoose');

//สร้าง schema
const testSchema = new mongoose.Schema({
    id:Number,
    name: String
});

//สร้าง model
const Test =  mongoose.model('Test',testSchema);

module.exports = Test;