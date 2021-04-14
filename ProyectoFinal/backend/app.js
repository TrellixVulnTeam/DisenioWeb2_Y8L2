const mongoose = require('./database/mongoose');
var crpyto = require('crypto');

var express = require('express');

//MERN - React
//MEAN - Angular

var cors = require('cors');

var Licores = require('./database/models/licores');
var Bufet = require('./database/models/bufet');
var UnidadMedida = require('./database/models/unidad_medida');
var DetalleUDM = require('./database/models/detalle');
var RolesEventos = require('./database/models/roles_eventos');
var Paises = require('./database/models/paises');
var Consecutivo = require('./database/models/consecutivos');
var Usuarios = require('./database/models/usuarios');
const { rawListeners } = require('./database/models/licores');
var Cajas = require('./database/models/cajas');
var BebidasCalientes = require('./database/models/bebidascalientes');
var BebidasFrias = require('./database/models/bebidasfrias');
var BebidasGaseosas = require('./database/models/bebidasgaseosas');
var Empleados = require('./database/models/empleados');
var Mesas = require('./database/models/mesas');
var Puestos = require('./database/models/puestos');
var datosCliente = require('./database/models/datoscliente');
const fechasCliente = require('./database/models/fechascliente');
const infopedido = require('./database/models/infopedido');
const Cliente = require('./database/models/cliente');

var app = express();

//Permisos de los headers
app.use(cors());

//Midddlewore
app.use(express.json());

//SEGURIDAD

//Usuarios


//INSERT UPDATE DELETE FIND- CRUD
//POST   PATCH    ""   ""

app.get('/usuarios', (req, res) =>{
    Usuarios.find({})
    .then(usuarios => res.send(usuarios))
    .catch((error) => console.log(error))
});

// app.get('/usuarios', (req, res) =>{
//     Usuarios.find({"datos_personales.nombre" : "2"})
//     .then(usuarios => res.send(usuarios))
//     .catch((error) => console.log(error))
// });

app.post('/usuarios', (req, res) =>{
    (new Usuarios(
        {
            "codigo" : req.body.codigo,
            "nombre" : req.body.nombre,
            "primer_apellido" : req.body.primer_apellido,
            "segundo_apellido" : req.body.segundo_apellido,
            "telefono_1" : req.body.telefono_1,
            "telefono_2" : req.body.telefono_2,
            "login" : req.body.login,
            "contrasena" : req.body.contrasena,
            "tipo_privilegio" : req.body.tipo_privilegio
        }
    ))
    .save()
    .then((usuarios) => {res.send(usuarios)})
    .catch((error) => console.log(error))
});
app.patch('/usuarios/:codigo', (req, res) =>{
    Usuarios.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((usuarios) => res.send(usuarios))
    .catch((error) => console.log(error));
});
app.delete('/usuarios/:codigo', (req, res) => {
    Usuarios.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

//Consecutivos

app.get('/consecutivos', (req, res) =>{
    Consecutivo.find({})
    .then(consecutivos => res.send(consecutivos))
    .catch((error) => console.log(error))
});

app.post('/consecutivos', (req, res) =>{
    (new Consecutivo(
        {
            'tipo_consecutivo': req.body.tipo_consecutivo,
            'descripcion': req.body.descripcion,
            'valor_consecutivo' : req.body.valor_consecutivo,
            'prefijo_consecutivo' : req.body.prefijo_consecutivo,
            'prefijo' : req.body.prefijo
        }
    ))
    .save()
    .then((consecutivo) => {res.send(consecutivo)})
    .catch((error) => console.log(error))
});
app.patch('/consecutivos/:consecutivoId', (req, res) =>{
    Consecutivo.findByIdAndUpdate( {'_id' : req.params.consecutivoId}, { $set : req.body})
    .then((usuarios) => res.send(usuarios))
    .catch((error) => console.log(error));
});
app.delete('/consecutivos/:consecutivoId', (req, res) => {
    Consecutivo.findByIdAndDelete(req.params.consecutivoId)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

//Países
app.get('/paises', (req, res) =>{
    Paises.find({})
    .then(paises => res.send(paises))
    .catch((error) => console.log(error))
});

app.post('/paises', (req, res) =>{
    (new Paises(
        {
            'codigo' : req.body.codigo,
            'nombre' : req.body.nombre,
            'bandera' : req.body.bandera
        }
    ))
    .save()
    .then((paises) => {res.send(paises)})
    .catch((error) => console.log(error));
});

app.patch('/paises/:codigo', (req, res) =>{
    Paises.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((paises) => res.send(paises))
    .catch((error) => console.log(error));
});
app.delete('/paises/:codigo', (req, res) => {
    Paises.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});
//Cajas
app.get('/cajas', (req, res) => {
    Cajas.find({})
    .then(cajas => res.send(cajas))
    .catch((error) => console.log(error))

});

app.post('/cajas', (req, res) =>{
    (new Cajas(
        {
            'datos_personales': req.body.datos_personales,
            'datos_tecnicos': req.body.datos_tecnicos,
            'privilegios': req.body.privilegios
        }
    ))
    .save()
    .then((cajas) => {res.send(cajas)})
    .catch((error) => console.log(error))
});
app.patch('/cajas/:codigo', (req, res) =>{
    Cajas.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((cajas) => res.send(cajas))
    .catch((error) => console.log(error));
});
app.delete('/cajas/:codigo', (req, res) => {
    Cajas.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});
//Roles y Eventos

app.get('/roles-y-eventos', (req, res) =>{
    RolesEventos.find({})
    .then(rolsentos => res.send(rolsentos))
    .catch((error) => console.log(error))
});

app.post('/roles-y-eventos', (req, res) => {
    (new RolesEventos(
        {
            'codigo' : req.body.codigo,
            'nombre' : req.body.nombre,
            'descripcion' : req.body.descripcion
        }
    ))
    .save()
    .then((rolentos) => {res.send(rolentos)})
    .catch((error) => console.log(error))
});
app.patch('/roles-y-eventos/:codigo', (req, res) =>{
    RolesEventos.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((roles_eventos) => res.send(roles_eventos))
    .catch((error) => console.log(error));
});
app.delete('/roles-y-eventos/:codigo', (req, res) => {
    RolesEventos.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

//detalleUDm

app.get('/detalleUDM', (req, res) =>{
    DetalleUDM.find({})
    .then(detalleudm => res.send(detalleudm))
    .catch((error) => console.log(error))
});

app.post('/detalleUDM', (req, res) => {
    (new DetalleUDM(
        {
            'detalle' : req.body.detalle
        }
    ))
    .save()
    .then((detalleudm) => {res.send(detalleudm)})
    .catch((error) => console.log(error))
});
app.patch('/detalleUDM/:detalle', (req, res) =>{
    DetalleUDM.findByIdAndUpdate( {'_id' : req.params.detalle}, { $set : req.body})
    .then((detalleudm) => res.send(detalleudm))
    .catch((error) => console.log(error));
});
app.delete('/detalleUDM/:detalle', (req, res) => {
    DetalleUDM.findByIdAndDelete(req.params.detalle)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

app.get('/unidad-de-medida', (req, res) =>{
    UnidadMedida.find({})
    .then(udm => res.send(udm))
    .catch((error) => console.log(error));
});

app.post('/unidad-de-medida', (req, res) =>{
    (new UnidadMedida(
        {
            'codigo': req.body.codigo,
            'unidad': req.body.unidad,
            'escala': req.body.escala,
            'detalle': req.body.detalle,
            'simbolo': req.body.simbolo,
            'simbologia': req.body.simbologia
        }
    ))
    .save()
    .then((udm) => {res.send(udm)})
    .catch((error) => console.log(error))
});

app.patch('/unidad-de-medida/:codigo', (req, res) =>{
    UnidadMedida.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((unidad_medida) => res.send(unidad_medida))
    .catch((error) => console.log(error));
});
app.delete('/unidad-de-medida/:codigo', (req, res) => {
    UnidadMedida.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});
//Clientes

//DATOS DEL CLIENTE

app.get('/datoscliente', (req, res) =>{
    datosCliente.find({})
    .then(dtclientes => res.send(dtclientes))
    .catch((error) => console.log(error));
});
app.post('/datoscliente', (req, res) =>{
    (new datosCliente(
        {
            'codigo': req.body.codigo,
            "nombre": req.body.nombre,
            "num_mesa": req.body.num_mesa,
            "monto": req.body.monto,
            "restaurante": req.body.restaurante,
            "hora_entrada": req.body.hora_entrada,
            "hora_salida": req.body.hora_salida, 
            "duracion": req.body.duracion
        }
    ))
    .save()
    .then((dtclientes) => {res.send(dtclientes)})
    .catch((error) => console.log(error))
});

app.patch('/datoscliente/:codigo', (req, res) =>{
    datosCliente.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((dtclientes) => res.send(dtclientes))
    .catch((error) => console.log(error));
});
app.delete('/datoscliente/:codigo', (req, res) => {
    datosCliente.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

//Fechas del cliente

app.get('/fechascliente', (req, res) =>{
    fechasCliente.find({})
    .then(fhclientes => res.send(fhclientes))
    .catch((error) => console.log(error));
});

app.post('/fechascliente', (req, res) =>{
    (new fechasCliente(
        {
            'codigo': req.body.codigo,
            'reservacion' : req.body.reservacion,
            'fechallegada' : req.body.fechallegada,
            'fechareservacion' : req.body.fechareservacion
        }
    ))
    .save()
    .then((fhclientes) => {res.send(fhclientes)})
    .catch((error) => console.log(error))
});
app.patch('/fechascliente/:codigo', (req, res) =>{
    fechasCliente.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((fhclientes) => res.send(fhclientes))
    .catch((error) => console.log(error));
});
app.delete('/fechascliente/:codigo', (req, res) => {
    fechasCliente.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

//Información del pedido

app.get('/infopedido', (req, res) =>{
    infopedido.find({})
    .then(infop => res.send(infop))
    .catch((error) => console.log(error));
});

app.post('/infopedido', (req, res) =>{
    (new infopedido(
        {
            'codigo': req.body.codigo,
            'numMesa': req.body.numMesa,
            'pedidoSilla1' : req.body.pedidoSilla1,
            'pedidoSilla2': req.body.pedidoSilla2,
            'pedidoSilla3': req.body.pedidoSilla3,
            'pedidoSilla4': req.body.pedidoSilla4,
            'precioSilla1' : req.body.precioSilla1,
            'precioSilla2' : req.body.precioSilla2,
            'precioSilla3' : req.body.precioSilla3,
            'precioSilla4' : req.body.precioSilla4,
        }
    ))
    .save()
    .then((infop) => {res.send(infop)})
    .catch((error) => console.log(error))
});
app.patch('/infopedido/:codigo', (req, res) =>{
    infopedido.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((infop) => res.send(infop))
    .catch((error) => console.log(error));
});
app.delete('/infopedido/:codigo', (req, res) => {
    infopedido.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});
//Cliente

app.get('/cliente', (req, res) =>{
    Cliente.find({})
    .then(cl => res.send(cl))
    .catch((error) => console.log(error));
});

app.post('/cliente', (req, res) =>{
    (new Cliente(
        {
            'codigo': req.body.codigo,
            'nombre': req.body.nombre,
            'monto_cliente': req.body.monto_cliente,
            'detalle' : req.body.detalle,
            'fecha': req.body.fecha,
            'reservacion': req.body.reservacion,
            'barra': req.body.barra,
            'restaurante': req.body.restaurante
        }
    ))
    .save()
    .then((cl) => {res.send(cl)})
    .catch((error) => console.log(error))
});
app.patch('/cliente/:codigo', (req, res) =>{
    Cliente.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((cl) => res.send(cl))
    .catch((error) => console.log(error));
});
app.delete('/cliente/:codigo', (req, res) => {
    Cliente.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});
//RESTAURANTES

//REST-ESPECIALES-BUFET
app.get('/bufet', (req, res) => {
    Bufet.find({})
    .then(bufet => res.send(bufet))
    .catch((error) => console.log(error));
});

app.post('/bufet', (req, res) =>{
    (new Bufet(
        {
            'codigo': crpyto
                    .createHash("sha256")
                    .update(req.body.codigo)
                    .digest("hex"),
            'nombre':        req.body.nombre,
            'precio':        req.body.precio,
            'tipo':          req.body.tipo,
            'unidad_medida': req.body.unidad_medida
        }
    ))
    .save()
    .then((bufet) =>{ res.send(bufet)})
    .catch((error) => console.log(error))
});


app.patch('/bufet/:bufetId', (req, res) => {
    Bufet.findByIdAndUpdate({'_id' : req.params.bufetId}, {$set : req.body})
    // UPDATE * WHERE ID = 3
    .then((bufet) => res.send(bufet))
    // After update, mande el object [req.body]
    .catch((error) => console.log(error));
    //Failsafe try-catch
});

app.delete('/bufet/:bufetId', (req, res) => {
    Bufet.findByIdAndRemove(req.params.bufetId)
    //DELETE WHERE bufetId = 1 // req.params y req.body.codigo
    .then((bufet) => res.send(bufet))
    .catch((error) => console.log(error));
});


// 

/* 

UPDATE BUFETS
app.patch('/books/:bookId', (req, res) =>{
    Books.findByIdAndUpdate( {'_id' : req.params.bookId}, { $set : req.body})
    // UPDATE WHERE
    .then((book) => res.send(book))
    .catch((error) => console.log(error));
});

ELIMINAR BUFET
//DELETE / DELETE
app.delete('/books/:bookId', (req, res) => {
    Books.findByIdAndDelete(req.params.bookId)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});


*/

//REST-BEBIDAS-CALIENTES

app.get('/bebidas_calientes', (req, res) =>{
    BebidasCalientes.find({})
    .then(bebidas_calientes => res.send(bebidas_calientes))
    .catch((error) => console.log(error));
});

app.post('/bebidas_calientes', (req, res) => {
    (new BebidasCalientes(
        {
            'codigo' : req.body.codigo,
            'nombre' : req.body.nombre,
            'ingredientes' : req.body.ingredientes,
            'precio' : req.body.precio,
            'restaurante' : req.body.restaurante,
            'descripcion' : req.body.descripcion
        }
    ))
    .save()
    .then((bebidas_calientes) => { res.send(bebidas_calientes) })
    .catch((error) => console.log(error))
});

app.patch('/bebidas_calientes/:codigo', (req, res) =>{
    BebidasCalientes.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((bebidas_calientes) => res.send(bebidas_calientes))
    .catch((error) => console.log(error));
});
app.delete('/bebidas_calientes/:codigo', (req, res) => {
    BebidasCalientes.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

//REST-BEBIDAS-FRÍAS

app.get('/bebidas_frias', (req, res) =>{
    BebidasFrias.find({})
    .then(bebidas_frias => res.send(bebidas_frias))
    .catch((error) => console.log(error));
});

app.post('/bebidas_frias', (req, res) => {
    (new BebidasFrias(
        {
            'codigo' : req.body.codigo,
            'nombre' : req.body.nombre,
            'ingredientes' : req.body.ingredientes,
            'precio' : req.body.precio,
            'restaurante' : req.body.restaurante,
            'descripcion' : req.body.descripcion
        }
    ))
    .save()
    .then((bebidas_frias) => { res.send(bebidas_frias) })
    .catch((error) => console.log(error))
});
app.patch('/bebidas_frias/:codigo', (req, res) =>{
    BebidasFrias.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((bebidas_frias) => res.send(bebidas_frias))
    .catch((error) => console.log(error));
});
app.delete('/bebidas_frias/:codigo', (req, res) => {
    BebidasFrias.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

//REST-BEBIDAS-GASEOSAS

app.get('/bebidas_gaseosas', (req, res) =>{
    BebidasGaseosas.find({})
    .then(bebidas_gaseosas => res.send(bebidas_gaseosas))
    .catch((error) => console.log(error));
});

app.post('/bebidas_gaseosas', (req, res) => {
    (new BebidasGaseosas(
        {
            'codigo': req.body.codigo,
            'nombre': req.body.nombre,
            'marca': req.body.marca,
            'nacionalidad': req.body.nacionalidad,
            'precio': req.body.precio,
            'restaurante': req.body.restaurante,
            'cantidad': req.body.cantidad,
            'descripcion': req.body.descripcion
        }
    ))
    .save()
    .then((bebidas_gaseosas) => { res.send(bebidas_gaseosas) })
    .catch((error) => console.log(error))
});

app.patch('/bebidas_gaseosas/:codigo', (req, res) =>{
    BebidasGaseosas.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((bebidas_gaseosas) => res.send(bebidas_gaseosas))
    .catch((error) => console.log(error));
});
app.delete('/bebidas_gaseosas/:codigo', (req, res) => {
    BebidasGaseosas.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

//REST-BEBIDAS-LICORES

app.get('/licores', (req, res) =>{
    Licores.find({})
    .then(licores => res.send(licores))
    .catch((error) => console.log(error));
});

app.post('/licores', (req, res) =>{
    (new Licores (
        {
            'codigo':          req.body.codigo,
            'restaurante':     req.body.restaurante,
            'nombre':          req.body.nombre,
            'cantidad':        req.body.cantidad,
            'marca':           req.body.marca,
            'descripcion':     req.body.descripcion,
            'nacionalidad':    req.body.nacionalidad,
            'precio_unitario': req.body.precio_unitario,
            'precio_botella':  req.body.precio_botella
        }
        ))
        .save()
        .then((licores) =>{ res.send(licores)})
        .catch((error) => console.log(error))
});

//REST-BEBIDAS-VINOS

//CLIENTES

app.get('/empleados', (req, res) =>{
    Empleados.find({})
    .then(empleados => res.send(empleados))
    .catch((error) => console.log(error))
});

app.post('/empleados', (req, res)=> {
    (new Empleados({
        'codigo' : req.body.codigo,
        'cedula': req.body.cedula,
        'nombre' : req.body.nombre,
        'primer_apellido' : req.body.primer_apellido,
        'segundo_apellido' : req.body.segundo_apellido,
        'telefono_1' : req.body.telefono_1,
        'telefono_2' : req.body.telefono_2,
        'puesto' : req.body.puesto,
        'nacionalidad' : req.body.nacionalidad
    }
    ))
    .save()
    .then((empleados) => { res.send(empleados) })
    .catch((error) => console.log(error))
});
app.patch('/empleados/:codigo', (req, res) =>{
    Empleados.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((empleados) => res.send(empleados))
    .catch((error) => console.log(error));
});
app.delete('/empleados/:codigo', (req, res) => {
    Empleados.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

//PROVEEDORES

//ADMINISTRACIÓN

//REPORTES


//MESAS
app.get('/mesas', (req, res) => {
    Mesas.find({})
    .then(mesas => res.send(mesas))
    .catch((error) => console.log(error))
});

app.post('/mesas', (req, res) => {
    (new Mesas({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'numero' : req.body.numero,
        'cantidad_sillas': req.body.cantidad_sillas,
        'nombre_restaurante': req.body.nombre_restaurante
    }
    ))
    .save()
    .then((mesas) => { res.send(mesas) })
    .catch((error) => console.log(error))
});
app.patch('/mesas/:codigo', (req, res) =>{
    Mesas.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((mesas) => res.send(mesas))
    .catch((error) => console.log(error));
});
app.delete('/mesas/:codigo', (req, res) => {
    Mesas.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

app.get('/puestos', (req, res) => {
    Puestos.find({})
    .then(puestos => res.send(puestos))
    .catch((error) => console.log(error))
});

app.post('/puestos', (req, res) =>{
    (new Puestos({
        'codigo' : req.body.codigo,
        'nombre': req.body.nombre,
        'interno': req.body.interno,
        'externo': req.body.externo,
        'rol_restaurante': req.body.rol_restaurante
    }
    ))
    .save()
    .then((puestos) => { res.send(puestos) })
    .catch((error) => console.log(error))
});
app.patch('/puestos/:codigo', (req, res) =>{
    Puestos.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    .then((puestos) => res.send(puestos))
    .catch((error) => console.log(error));
});
app.delete('/puestos/:codigo', (req, res) => {
    Puestos.findByIdAndDelete(req.params.codigo)
    .then((list) => res.send(list))
    .catch((error) => console.log(error));
});

var port = 3000;

app.listen(port, () =>{
    console.log('RestauranteJS funciona');
});