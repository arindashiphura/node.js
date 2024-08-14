const mongoose = require("mongoose");
const regisSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    corfirmpassword: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true

    },
    input:
    {
        type: Object
    },
    
    
})
