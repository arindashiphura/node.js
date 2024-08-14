const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
    cropName:{
        type: String,
        required: true
    },
    cropType:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
})

module.exports = mongoose.model("Crop", cropSchema);