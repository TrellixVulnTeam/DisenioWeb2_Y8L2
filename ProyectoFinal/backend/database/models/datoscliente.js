const mongoose = require('mongoose');

const datosclienteSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    }, 
    num_mesa: {
        type: Number,
        required: true
    }, 
    monto: {
        type: Number,
        required: true
    },
    restaurante: {
        type: String,
        required: true
    },
    hora_entrada: {
        type: Date,
        required: true
    },
    hora_salida: {
        type: Date,
        required: true
    },
    duracion: {
        type: Date,
        required: true
    }
});

const DatosCliente = mongoose.model('datosCliente', datosclienteSchema);

module.exports = DatosCliente;