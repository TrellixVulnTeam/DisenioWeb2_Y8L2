const mongoose = require('mongoose');

const infopedidoSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    numMesa: {
        type: String,
        required: true
    }, 
    pedidoSilla1: {
        type: String,
        required: true
    }, 
    pedidoSilla2: {
        type: String,
        required:true
    },
    pedidoSilla3: {
        type: String,
        required:true
    },
    pedidoSilla4: {
        type: String,
        required:true
    },
    precioSilla1: {
        type: Number,
        required:true
    },
    precioSilla2: {
        type: Number,
        required:true
    },
    precioSilla3: {
        type: Number,
        required:true
    },
    precioSilla4: {
        type: Number,
        required:true
    }
});

const InfoPedido = mongoose.model('infopedido', infopedidoSchema);

module.exports = InfoPedido;