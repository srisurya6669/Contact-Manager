const express = require('express');
const dotenv = require('dotenv').config();
const contactRoute = require('./routes/contactRouter')
const bodyParser = require('body-parser')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbConnection')

const app = express();

connectDB();

const jsonParser = bodyParser.json()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(contactRoute)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})