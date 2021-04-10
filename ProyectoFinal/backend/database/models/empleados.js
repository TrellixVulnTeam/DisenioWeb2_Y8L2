const mongoose = require('mongoose');

const empleadosSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    cedula: {
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
    telefono_1: {
        type: String,
        required: true
    },
    telefono_2: {
        type: String,
        required: true
    },
    puesto: {
        type: String,
        required: true
    }, 
    nacionalidad: {
        type: String,
        required: true
    }
});

const Empleados = mongoose.model('Empleados', empleadosSchema);

module.exports = Empleados;