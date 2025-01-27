const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    image: String,
    bgColor: String,
    panelColor: String,
    textColor: String,

});
module.exports = mongoose.model('Product', productSchema);