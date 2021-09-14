const mongoose = require('mongoose');

let bikeSchema = new mongoose.Schema({
    bike_name :{
        type:String,
        required: "Required"
    },
});

module.exports = mongoose.model("Bike", bikeSchema);