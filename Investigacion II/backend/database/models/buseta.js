const mongoose = require('mongoose');

var busetaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    numeroBuseta: {
        type: Number,
        required: true
    },
    camposRestantes: {
        type: Number,
        required: true
    }
});

var Buseta = mongoose.model('Buseta', busetaSchema);

module.exports = Buseta;