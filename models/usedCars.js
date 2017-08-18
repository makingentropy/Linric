const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    make: String,
    imagelink: String,
    model: String,
    trim: String,
    year: Number,
    color: String,
    price: Number,
    previousOwnerCount: Number
});

const Cars = mongoose.model('Car', carSchema);

module.exports = Cars;
