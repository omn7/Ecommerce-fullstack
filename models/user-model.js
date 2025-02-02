const mongoose = require('mongoose');


const usersSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        typeof: Array,
        default: []
    },
    
    orders: {
        typeof: Array,
        default: []
    },
    contact: Number,
    picture: String

});

module.exports = mongoose.model('User', usersSchema);
