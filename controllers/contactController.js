const asyncHandler = require('express-async-handler')

// @Desc : Get All contacts
// Route : GET /contacts
// @Access : public
const getAllContacts = asyncHandler((req, res) => {
    res.status(200).json({ message: 'All contacts' })
})

// @Desc : Get single contact
// Route : GET /contacts/:id
// @Access : public 
const getContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Getting Contact with id ${req.params.id}` })
})

// @Desc : create contact
// Route : POST /contacts
// @Access : public 
const createContact = asyncHandler((req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    res.status(200).json({ message: 'Create a Contact' })
})


// @Desc : update a contact
// Route : PUT /contacts/:id
// @Access : public 
const updateContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Updating Contact with id ${req.params.id}` })
})


// @Desc : delete a contact
// Route : DELETE /contacts/:id
// @Access : public 
const deleteContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Deleting Contact with id ${req.params.id}` })
})

module.exports = { getAllContacts, getContact, createContact, updateContact, deleteContact }