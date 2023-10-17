require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");



const app = express()

const cors = require('cors')


mongoose.connect(
    process.env.DATABASE_URI, { useNewUrlParser:true }
    );
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',()=> console.log('connected to Database'))

app.use(cors())

app.use(express.json())

const memberRouter = require('./routes/Members')
app.use('/members', memberRouter)





app.listen(3001, () => {
    console.log("Server is running perfectly")
});