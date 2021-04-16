const mongoose = require('mongoose');


const infomarcaSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    nacionalidad: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: false
    }
});

const infoMarcas = mongoose.model('infoMarcas', infomarcaSchema);

module.exports = infoMarcas;