const mongoose = require("mongoose")
const userSchema =  mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        uppercase:true
    },
    lastName: {
        type: String,
        required: true,
        uppercase:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})
const signupModel = mongoose.model("userSchema", userSchema);
module.exports = signupModel;