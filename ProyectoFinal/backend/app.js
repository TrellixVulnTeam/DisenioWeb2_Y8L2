const mongoose = require('./database/mongoose');
var express = require('express');
var cors = require('cors');

var Licores = require('./database/models/exportSchemas/licoresExport');
var Bufet = require('./database/models/exportSchemas/bufetExport');
var Consecutivos = require('./database/models/exportSchemas/consecutivosExport');
var UDM = require('./database/models/exportSchemas/udmExport');

var app = express();

app.use(cors());

app.use(express.json());

//SEGURIDAD

// app.get('/bufet');

//consecutivo
app.get('/consecutivos', (req, res)=>{
    Consecutivos.find({})
    .then(consecutivos => res.send(consecutivos))
    .catch((error) => console.log(error));
});

app.post('/consecutivos', (req, res) =>{
    (new Consecutivos(
        {
            'tipo_consecutivo': req.body.tipo_consecutivo,
            'descripcion': req.body.descripcion,
            'valor_consecutivo': req.body.valor_consecutivo,
            'prefijo_consecutivo': req.body.prefijo_consecutivo,
            'prefijo': req.body.prefijo
        }
    ))
    .save()
    .then((bufet) =>{ res.send(bufet)})
    .catch((error) => console.log(error))
});

app.get('/unidad_medida', (req, res)=>{
    UDM.find({})
    .then(udm => res.send(udm))
    .catch((error) => console.log(error));
});

app.post('/unidad_medida', (req, res) =>{
    (new UDM(
        {
            'codigo': req.body.codigo,
            'unidad': req.body.unidad,
            'escala': req.body.escala,
            'detalle': req.body.detalle,
            'simbolo': req.body.simbolo,
            'simbologia': req.body.simbologia
        }
    ))
    .save()
    .then((bufet) =>{ res.send(bufet)})
    .catch((error) => console.log(error))
});


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