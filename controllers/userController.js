const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
// @Desc : register a User
// Route : POST /register
// @Access : public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        res.status(400);
        throw new Error('user already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(`User created ${user}`)
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400)
        throw new Error("User data is not valid")
    }

})

// @Desc : login a User
// Route : POST /login
// @Access : public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password })
    if (!user) {
        res.status(404)
        throw new Error('user not found')
    }
    res.status(200).json(user)
})

// @Desc : get current User info
// Route : GET /current
// @Access : private
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "current user" });
})

module.exports = { registerUser, loginUser, currentUser }