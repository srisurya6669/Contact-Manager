const express = require('express');
const router = express.Router();
const { getAllContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController')

router.get('/contacts', getAllContacts)

router.get('/contacts/:id', getContact)

router.post('/contacts', createContact)

router.put('/contacts/:id', updateContact)

router.delete('/contacts/:id', deleteContact)

module.exports = router;