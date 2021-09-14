const express = require('express');
const router = express.Router();
const BikeModel = require('../models/bike');
const checkAuth = require('../middleware/check-auth');

router.get('/',(req,res,next)=>{
   
    BikeModel.find()
    .exec()
    .then(bikes =>{
       res.render('bike', {bikes: bikes})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })  
    });
});


router.get('/create',(req,res,next)=>{
    res.render('bikeForm')
});


router.post('/', (req, res, next) => {

    const bike = new BikeModel({
        bike_name: req.body.bike_name,
    });
    bike.save()
    .then(result =>{
        console.log(result);
        res.redirect('/bike')
    })
    .catch(err => {
        console.log(err);
    });
    
  }
);


router.delete('/:id', (req, res, next) => {
    const id = req.params.id;

    BikeModel.remove({_id: id})
    .exec()
    .then(result => {
        console.log(result);
        res.redirect('/bike')
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({error :err});
    });
  }
);
        

module.exports = router;