const mongoose = require('mongoose')

const regschema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,

    },
    LastName :{
        type:String,
        required: true

    },
    Birthday : {
        type: Date,
        required: true
        },
    Wedding : {
        type: Date,
        required: false
    },
    Consent: {
        type: Boolean,
        required: true
    }

    
});

const register = mongoose.model("register", regschema)

module.exports  = register   