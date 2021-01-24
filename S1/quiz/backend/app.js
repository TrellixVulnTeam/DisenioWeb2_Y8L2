const mongoose = require('./database/mongoose');
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

const People = require('./database/models/people');

app.get('/people', (req, res) => {
    People.find({})
    .then(person => res.send(person))
    .catch((error) => console.log(error));
});

app.post('/people', (req, res) => {
    (new People (
        {
            'id' : req.body.id,
            'name' : req.body.name,
            'username' : req.body.username,
            'email': req.body.email,
            'address' : req.body.address ,
            'geo': req.body.geo,
            'phone' : req.body.phone,
            'website' : req.body.website,
            'company' : req.body.company
        }
        ))
        .save()
        .then((people) => { res.send(people)})
        .catch((error) => console.log(error))
});

var PORT = 3000;

app.listen(PORT, () =>{
    console.log('Express server/NodeJS is working fine and listening on port #' + PORT);
});