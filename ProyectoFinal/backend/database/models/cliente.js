const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    monto_cliente: {
        type: Number,
        required: true
    },
    detalle: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    reservacion: {
        type: String,
        required: true
    },
    barra: {
        type: String,
        required: true
    },
    restaurante : {
        type: String,
        required: true
    }
});

const Cliente = mongoose.model('cliente', clienteSchema);

module.exports = Cliente;