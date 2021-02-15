const mongoose = require('mongoose');
var UDM = require('../nestedSchemas/udmNested');

var test = UDM.unidad_medida;

// cisnisndf 

const bufetSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    }, 
    precio: {
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    unidad_medida: {
        type: String,
        required: true
    }
});

const Bufet = mongoose.model('Bufet', bufetSchema);

module.exports = Bufet;