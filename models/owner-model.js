const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
    fullname:{
        type: String,
        minilength: 3,
        trim: true,

    },
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