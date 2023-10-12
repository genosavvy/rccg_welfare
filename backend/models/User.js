const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        require: true
    }
});

const users = mongoose.model("user_test", UserSchema)

module.exports = users