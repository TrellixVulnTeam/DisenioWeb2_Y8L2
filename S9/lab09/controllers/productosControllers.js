const Productos = require('../models/Producto');

exports.lista = async (req, res) => {
    try {
        const productos = await Productos.find();
        res.json(productos);
    } catch (error) {
        res.status(400).send(error);
    }
}
exports.seleccionado = async (req, res, next) => {
    try {
        const id = req.params.id;
        const producto = await Productos.findById(id);
        if (!producto) {
            res.status(404).json({
                mensaje: 'El producto no existe'
            })
        }
        res.json(producto);

    } catch (error) {
        res.status(400).send(error);
        next();
    }





}

exports.agregar = async (req, res) => {
    const producto = new Productos(req.body);
    try {
        await producto.save();
        res.json({ mensaje: 'Se creo un nuevo producto!' })
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.actualizar = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Productos.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        );
        res.json({ mensaje: 'Se actulizo el producto: ' + id })
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Productos.findOneAndDelete(
            { _id: id }
        );
        res.json({ mensaje: 'Se Elimino el producto: ' + id })
    } catch (error) {
        res.status(400).send(error.message);
    }
}