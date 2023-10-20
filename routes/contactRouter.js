const express = require('express');
const router = express.Router();
const { getAllContacts, getContact, createContact, updateContact, deleteContact } = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');


router.get('/contacts', validateToken, getAllContacts);

router.get('/contacts/:id', validateToken, getContact);

router.post('/contacts', createContact);

router.put('/contacts/:id', validateToken, updateContact);

router.delete('/contacts/:id', validateToken, deleteContact);


module.exports = router;