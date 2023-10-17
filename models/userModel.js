const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the username"]
    },
    email: {
        type: String,
        required: [true, "Please add the user email Address"],
        unique: [true, "Email already in use"]
    },
    password: {
        type: String,
        required: [true, "Please add the user password"]
    }
},
    {
        timestamps: true
    })


module.exports = mongoose.model("User", userSchema)