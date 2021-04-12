//ID int Tarea string Si esta concluida(checkbox en visualizacion) Responsable string

const mongoose = require('mongoose');

const tareasSchema = new mongoose.Schema({
    tareaId: {
        type: String,
        required: false
    },
    tarea: {
        type: String,
        required: true
    },
    concluida: {
        type: Boolean,
        required: true
    },
    responsable: {
        type: String,
        required: true
    }
});

const Tareas = mongoose.model('Tareas', tareasSchema);

module.exports = Tareas;