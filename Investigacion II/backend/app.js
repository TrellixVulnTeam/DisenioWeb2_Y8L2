const mongoose = require('./database/mongoose');
var express = require('express');
var cors = require('cors');
var Buseta = require('./database/models/buseta');

var app = express();

app.use(cors());

app.use(express.json());

app.get('/buseta', (req, res) =>{
    Buseta.find({})
    .then(buseta => res.send(buseta))
    .catch((error) => console.log(error))
});

function minus(num) {
    var a = 20;

    if (a != 0) {
        var totalRemaining = a - num;
    } else if (num > a) {
        console.log('NO PODER');

    }

    return totalRemaining;

}

app.post('/buseta', (req, res) =>{
    (new Buseta({
        'nombre' : req.body.nombre,
        'numeroBuseta' : req.body.numeroBuseta,
        'camposRestantes': parseInt(minus(req.body.camposRestantes))
    }))
    .save()
    .then((buseta) => { res.send(buseta) })
    .catch((error) => console.log(error))
});

var port = 3000;

app.listen(port, () =>{
    console.log('Investigación II Node corriendo en puerto: ' + port);
});