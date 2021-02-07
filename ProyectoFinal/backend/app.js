const mongoose = require('./database/mongoose');
var express = require('express');
var cors = require('cors');

var Licores = require('./database/models/licores');
var Bufet = require('./database/models/bufet');

var app = express();

app.use(cors());

app.use(express.json());

//SEGURIDAD

//RESTAURANTES

                                                //REST-BUFET
app.get('/bufet', (req, res) => {
    Bufet.find({})
    .then(bufet => res.send(bufet))
    .catch((error) => console.log(error));
});

app.post('/bufet', (req, res) =>{
    (new Bufet(
        {
            'codigo':        req.body.codigo,
            'nombre':        req.body.nombre,
            'precio':        req.body.precio,
            'tipo':          req.body.tipo,
            'unidad_medida': req.body.unidad_medida
        }
    ))
    .save()
    .then((bufet) =>{ res.send(bufet)})
    .catch((error) => console.log(error))
});


                                                //REST-LICORES

app.get('/licores', (req, res) =>{
    Licores.find({})
    .then(licores => res.send(licores))
    .catch((error) => console.log(error));
});

app.post('/licores', (req, res) =>{
    (new Licores (
        {
            'codigo':          req.body.codigo,
            'restaurante':     req.body.restaurante,
            'nombre':          req.body.nombre,
            'cantidad':        req.body.cantidad,
            'marca':           req.body.marca,
            'descripcion':     req.body.descripcion,
            'nacionalidad':    req.body.nacionalidad,
            'precio_unitario': req.body.precio_unitario,
            'precio_botella':  req.body.precio_botella
        }
        ))
        .save()
        .then((licores) =>{ res.send(licores)})
        .catch((error) => console.log(error))
});

//CLIENTES

//PROVEEDORES

//ADMINISTRACIÓN

//REPORTES

var port = 3000;

app.listen(port, () =>{
    console.log('RestauranteJS funciona');
});