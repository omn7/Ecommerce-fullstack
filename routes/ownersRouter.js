const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owner-model');


if (process.env.NODE_ENV !== 'development') {
    console.log(ownerModel);
   router.post('/create', async function (req, res)  {
        let owner = await ownerModel.ownerModel.find(req.body);
        
        if (owner.length > 0) {
            return res.status(503).send('Owner already exists');
        }
        res.send('Owner created');
   
            });
        }


router.get('/', (req, res) => {
    res.send('Hey its workings');
});



module.exports = router;