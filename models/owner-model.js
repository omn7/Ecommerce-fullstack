const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
   
    product: {
        typeof: Array,
        default: []
    },
    contact: Number,
    gstin: String
});

exports.ownerModel = mongoose.model('Owner', ownerSchema);