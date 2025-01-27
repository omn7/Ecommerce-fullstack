const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const usersSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        typeof: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        typeof: Array,
        default: []
    },
    contact: Number,
    picture: String

});

module.exports = mongoose.model('User', usersSchema);
