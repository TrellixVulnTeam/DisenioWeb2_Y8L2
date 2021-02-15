const mongoose = require('mongoose');

const Info = new mongoose.Schema({
    fecha : { },
    detalle: { },
    nombre_especimen: { }
});

const gansoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number
    }, 
    informacion_especie: [Info]
});