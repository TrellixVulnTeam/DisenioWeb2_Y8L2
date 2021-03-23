const mongoose = require('mongoose');

const paisSchema = mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    bandera: {
        type: String,
        required: true
    }
});

const Pais = mongoose.model('Pais', paisSchema);

module.exports = Pais;