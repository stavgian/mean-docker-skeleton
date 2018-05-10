// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// mongoose.Promise = require('bluebird');

mongoose.Promise = global.Promise;

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost,{server: { poolSize: 5,   useMongoClient: true  }});

// create mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// create mongoose model
const User = mongoose.model('User', userSchema);

/* GET api listing. */
router.get('/', (req, res) => {
        res.send('api works fine');
});

/* GET all users. */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* GET one users. */
router.get('/users/:id', (req, res) => {
    User.findById(req.param.id, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* Create a user. */
router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        console.log('User created successfully')
        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

module.exports = router;