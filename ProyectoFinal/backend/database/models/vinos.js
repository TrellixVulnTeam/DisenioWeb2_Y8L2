const mongoose = require('mongoose');

const vinoSchema = new mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    restaurante: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        maxlength: 120
    },
    nacionalidad: {
        type: String,
        required: true
    },
    precio_unitario: {
        type: Number,
        required: false
    },
    anio_cosecha: {
        type: Number,
        required: false
    },
    precio_botella: {
        type: Number,
        required: false
    }
    // foto: {
    //     type: Image,
        
    // }
});

const Vino = mongoose.model('vinos', vinoSchema);

module.exports = Vino;