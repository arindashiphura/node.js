const mongoose = require('mongoose');
const cropSchema = new mongoose.Schema({
    produceName: {
        type: String,
        required: true
    },
    ProduceType: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    Time:{
        type: String,
        required: true
    },
    tonnage:{
        type: Number,
        required: true
    },
    dealersName:{
        type: String,
        required: true
    },
    branchName:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    sellingPrice:{
        type: Number,
        required: true
    }
});

