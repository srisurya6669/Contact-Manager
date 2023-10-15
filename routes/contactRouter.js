const express = require('express');
const router = express.Router();

router.get('/contacts', (req, res) => {
    res.status(200).json({ message: 'All contacts' })
})

router.get('/contacts/:id', (req, res) => {
    res.status(200).json({ message: `Getting Contact with id ${req.params.id}` })
})

router.post('/contacts', (req, res) => {
    res.status(200).json({ message: 'Create a Contact' })
})

router.put('/contacts/:id', (req, res) => {
    res.status(200).json({ message: `Updating Contact with id ${req.params.id}` })
})

router.delete('/contacts/:id', (req, res) => {
    res.status(200).json({ message: `Deleting Contact with id ${req.params.id}` })
})

module.exports = router;