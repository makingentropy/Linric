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
    Cars.create(req.body, (err, createdTodo)=>{
        res.json(createdTodo);
    });
});

//delete
router.delete('/:id', (req, res)=>{
    Cars.findByIdAndRemove(req.params.id, (err, deletedTodo)=>{
        res.json(deletedTodo);
    });
});

//update
router.put('/:id', (req, res)=>{
    Cars.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo)=>{
        res.json(updatedTodo);
    });
});

module.exports = router;
