const mongoose = require('mongoose');

const datos_personalesSchema = mongoose.Schema({
    codigo: {
        type: String, 
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    primer_apellido: {
        type: String,
        required: true
    },
    segundo_apellido: {
        type: String,
        required: true
    },
    telefono1: {
        type: String,
        required: true
    },
    telefono2: {
        type: String
    }

});

const datos_tecnicosSchema = mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    }
});

const privilegiosSchema = mongoose.Schema({
    tipo_administrador: {
        type: String,
        required: true
    }
});

const cajasSchema = mongoose.Schema({
    datos_personales: [datos_personalesSchema],
    datos_tecnicos: [datos_tecnicosSchema],
    privilegios: {
        type: String,
        required: true
    }
});

const Cajas = mongoose.model('Cajas', cajasSchema);

module.exports = Cajas;