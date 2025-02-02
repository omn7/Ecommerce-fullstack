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

    let createdowner =    await ownerModel.ownerModel.create({
                            fullname: req.body.fullname,
                            email: req.body.email,
                            password: req.body.password,
            
        });
        res.status(203).send(createdowner);
   
            });
        }


router.get('/', (req, res) => {
    res.send('Hey its workings');
});



module.exports = router;