var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


var Artlist = require('../models/artlist');
  
router.get('/static', function(req, res, next) {
        res.json( [
             {
      "name": "Luke 123",
      "height": "172",
      "weight": "77",
      "url": "http://swapi.co/api/actualpatients/1/" 
    },
    {
      "name": "C-3PO", 
      "height": "167",
      "weight": "75",
      "url": "http://swapi.co/api/actualpatients/2/"
    },
    {
      "name": "R2-D2",
      "height": "96",
      "weight": "32",
      "url": "http://swapi.co/api/actualpatients/3/"
    }
     ])
 
});

router.get('/', function(req, res, next) {
    Artlist.find()
        .exec(function(err, docs) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        });
});


router.get('/:id', function(req, res, next) {
    Artlist.findById(req.params.id)
        .exec(function(err, docs) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            });
        }); 
});


router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Authentication failed',
                error: err
            });
        }
        next();
    });
});


module.exports = router;
