const mongoose = require('mongoose');

const userSchema = new mongoose.Schema (
    {
        username: {
            type: String,
            required: true
        },
        age: {
            type: Date,
            required: true
        },
        gender: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true 
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = Product;