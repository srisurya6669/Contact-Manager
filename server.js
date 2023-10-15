const express = require('express');
const dotenv = require('dotenv').config();
const contactRoute = require('./routes/contactRouter')

const app = express();

const PORT = process.env.PORT || 5000

app.use(contactRoute)


app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})