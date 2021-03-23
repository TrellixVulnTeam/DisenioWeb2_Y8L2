const mongoose = require('mongoose');

const datosPersonalesSchema = new mongoose.Schema({
    codigo: {
        type: String, 
        // required: true
    },
    nombre: {
        type: String,
        // required: true
    },
    primer_apellido: {
        type: String,
        // required: true
    },
    segundo_apellido: {
        type: String,
        // required: true
    },
    telefono_1 :{
        type: String,
        // required: true
    },
    telefono_2: {
        type: String,
        // required: true
    }
});

const datosTecnicosSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    }
});

const privilegiosSchema = new mongoose.Schema({
    tipo_privilegio: {
        type: String,
        required: true
    }
});

const usuarioSchema = new mongoose.Schema({
    datos_personales: [datosPersonalesSchema],
    datos_tecnicos: [datosTecnicosSchema],
    privilegios: [privilegiosSchema]
});

const Usuarios = mongoose.model('Usuarios', usuarioSchema);

module.exports = Usuarios;