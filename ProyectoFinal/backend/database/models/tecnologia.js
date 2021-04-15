const mongoose = require('mongoose');

const tecnologiaSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    nombre_restaurante: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: false
    },
    marca: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: true
    }
});

const Tecnologia = mongoose.model('tecnologia', tecnologiaSchema);

module.exports = Tecnologia;