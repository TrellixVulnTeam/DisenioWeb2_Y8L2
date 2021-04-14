const mongoose = require('mongoose');

const fechasclienteSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    reservacion: {
        type: String,
        required: true
    }, 
    fechallegada: {
        type: Date,
        required: true
    }, 
    fechareservacion: {
        type: Date,
        required:true
    }
});

const FechasCliente = mongoose.model('fechasCliente', fechasclienteSchema);

module.exports = FechasCliente;