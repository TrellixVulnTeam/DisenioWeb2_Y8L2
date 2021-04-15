const mongoose = require('mongoose');

/* 
const info_contacto = mongoose.Schema({
    
});

const info_marca = mongoose.Schema({
    
}); */

const marcaSchema = mongoose.Schema({
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
    foto_marca: {
        type: String,
        required: false
    },
    nombre_empresa: {
        type: String,
        required: true
    },
    telefono_empresa: {
        type: Number,
        required: true
    },
    cedula_juridicaEmpresa: {
        type: String,
        required: true
    },
    detalle_empresa: {
        type: String,
        required: true
    },
    foto_empresa: {
        type: String,
        required: false
    }
});

const Marca = mongoose.model('marcas', marcaSchema);

module.exports = Marca;