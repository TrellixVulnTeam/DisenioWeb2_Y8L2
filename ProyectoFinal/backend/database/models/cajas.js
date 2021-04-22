const mongoose = require('mongoose');

const cajasSchema = mongoose.Schema({
    codigo: {
        type: String, 
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    dineroEntrada: {
        type: Number,
        required: true
    },
    cajaApertura: {
        type: String,
        required: true
    },
    cajaCierre: {
        type: Number,
        required: true
    },
    restaurante: {
        type: String,
        required: true
    }
});

const Cajas = mongoose.model('Cajas', cajasSchema);

module.exports = Cajas;