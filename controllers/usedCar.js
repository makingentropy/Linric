const express = require('express');
const router = express.Router();
const Cars = require('../models/usedCars.js');

//index
router.get('/', (req, res)=>{
    Cars.find({}, (err, foundCars)=>{
        res.json(foundCars);
    });
});

//create
router.post('/', (req, res)=>{
  console.log(req.body)
    Cars.create(req.body, (err, createdCar)=>{
        res.json(createdCar);
    });
});

//delete
router.delete('/:id', (req, res)=>{
    Cars.findByIdAndRemove(req.params.id, (err, deletedCar)=>{
        res.json(deletedCar);
    });
});

//update
router.put('/:id', (req, res)=>{
    Cars.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCar)=>{
        res.json(updatedCar);
    });
});

module.exports = router;
