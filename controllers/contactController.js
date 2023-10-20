const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')
// @Desc : Get All contacts
// Route : GET /contacts
// @Access : private
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id })
    res.status(200).json(contacts)
})

// @Desc : Get single contact
// Route : GET /contacts/:id
// @Access : private 
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(contact)
})

// @Desc : create contact
// Route : POST /contacts
// @Access : private 
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    console.log(req.user)
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    })
    res.status(200).json(contact)
})


// @Desc : update a contact
// Route : PUT /contacts/:id
// @Access : private 
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedContact)
})


// @Desc : delete a contact
// Route : DELETE /contacts/:id
// @Access : private 
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedContact)
})

module.exports = { getAllContacts, getContact, createContact, updateContact, deleteContact }