const express = require('express');
const router = express.Router();
const owners = require('../models/owner-model');

if (process.env.NODE_ENV !== 'production') {
   
   router.post('/create', (req, res) => {
    res.send('hey');
    });
}



module.exports = router;