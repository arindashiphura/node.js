const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const SignupSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    // other fields like username, password, etc.
});

SignupSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Signup', SignupSchema);
