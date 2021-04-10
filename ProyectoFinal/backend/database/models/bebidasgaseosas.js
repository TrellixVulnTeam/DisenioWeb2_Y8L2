const mongoose = require('mongoose');

const bebidasGaseosasSchema = new mongoose.Schema({
        codigo: {
            type: String,
            required: true
        },
        nombre:  {
            type: String,
            required: true
        },
        marca: {
            type: String,
            required: true
        },
        nacionalidad: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        restaurante: {
            type: String,
            required: true
        },
        cantidad: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        }
});

const BebidasGaseosas = mongoose.model('BebidasGaseosas', bebidasGaseosasSchema);

module.exports = BebidasGaseosas;