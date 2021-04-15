const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    primer_apellido: {
        type: Number,
        required: true
    },
    segundo_apellido: {
        type: String,
        required: true
    },
    telefono_oficina: {
        type: Number,
        required: false
    },
    fax: {
        type: String,
        required: false
    },
    celular: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: false
    },
    fecha_ingreso: {
        type: String,
        required: false
    },
    nombre_proveedor: {
        type: String,
        required: true
    },
    correo: {
        type: Number,
        required: false
    },
    direccion: {
        type: String,
        required: false
    },
    nombre_contactoEmpresa: {
        type: String,
        required: true
    },
    telefono_contactoEmpresa: {
        type: Number,
        required: false
    },
    direccion_empresa: {
        type: String,
        required: false
    }
});

const Proveedor = mongoose.model('proveedores', proveedorSchema);

module.exports = Proveedor;