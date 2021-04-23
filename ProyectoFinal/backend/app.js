const mongoose = require('./database/mongoose');
var crpyto = require('crypto');

var express = require('express');
var cors = require('cors');

var Licores = require('./database/models/licores');
var Bufet = require('./database/models/bufet');
var UnidadMedida = require('./database/models/unidad_medida');
var DetalleUDM = require('./database/models/detalle');
var RolesEventos = require('./database/models/roles_eventos');
var Paises = require('./database/models/paises');
var Consecutivo = require('./database/models/consecutivos');
var Usuarios = require('./database/models/usuarios');
const {
    rawListeners
} = require('./database/models/licores');
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
const Restaurantes = require('./database/models/restaurantes');
const Marcas = require('./database/models/marcas');
const Comestibles = require('./database/models/comestibles');
const Desechables = require('./database/models/desechables_y_empaques');
const Limpieza = require('./database/models/limpieza');
const Tecnologia = require('./database/models/tecnologia');
const Equipos = require('./database/models/equipos');
const Proveedores = require('./database/models/proveedores');
const Vinos = require('./database/models/vinos');
const infoMarcas = require('./database/models/infomarcas');
const infoContacto = require('./database/models/infocontacto');
const Especialides = require('./database/models/especialidades');
const Privilegios = require('./database/models/privilegios');
const Bitacora = require('./database/models/bitacoras');
const Facturacion = require('./database/models/Facturacion');


var app = express();

//Permisos de los headers
app.use(cors());


//LOGIN COOKIES & SESSION
var TWO_HOURS = 1000 * 60 * 60 * 2;
var SESS_LIFETIME = TWO_HOURS;
const SESS_NAME = 'sid';
const NODE_DEV = 'development';
const SESS_SECRET = 'ssh!quiet,it\asecret!';

const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/login');
    } else {
        next();
    }
}

const redirectHome = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/home');
    } else {
        next();
    }
}






//Midddleware
app.use(express.json());

//SEGURIDAD

//Usuarios


//INSERT UPDATE DELETE FIND- CRUD
//POST   PATCH    ""   ""

app.get('/usuarios', (req, res) => {
    Usuarios.find({})
        .then(usuarios => res.send(usuarios))
        .catch((error) => console.log(error))
});

// app.get('/usuarios', (req, res) =>{
//     Usuarios.find({"datos_personales.nombre" : "2"})
//     .then(usuarios => res.send(usuarios))
//     .catch((error) => console.log(error))
// });

app.post('/usuarios', (req, res) => {
    (new Usuarios({
        "codigo": req.body.codigo,
        "nombre": req.body.nombre,
        "primer_apellido": req.body.primer_apellido,
        "segundo_apellido": req.body.segundo_apellido,
        "telefono_1": req.body.telefono_1,
        "telefono_2": req.body.telefono_2,
        "login": req.body.login,
        "contrasena": req.body.contrasena,
        "tipo_privilegio": req.body.tipo_privilegio
    }))
    .save()
        .then((usuarios) => {
            res.send(usuarios)
        })
        .catch((error) => console.log(error))
});
app.patch('/usuarios/:codigo', (req, res) => {
    Usuarios.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((usuarios) => res.send(usuarios))
        .catch((error) => console.log(error));
});
app.delete('/usuarios/:codigo', (req, res) => {
    Usuarios.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//Consecutivos

app.get('/consecutivos', (req, res) => {
    Consecutivo.find({})
        .then(consecutivos => res.send(consecutivos))
        .catch((error) => console.log(error))
});

app.post('/consecutivos', (req, res) => {
    (new Consecutivo({
        'tipo_consecutivo': req.body.tipo_consecutivo,
        'descripcion': req.body.descripcion,
        'valor_consecutivo': req.body.valor_consecutivo,
        'prefijo_consecutivo': req.body.prefijo_consecutivo,
        'prefijo': req.body.prefijo
    }))
    .save()
        .then((consecutivo) => {
            res.send(consecutivo)
        })
        .catch((error) => console.log(error))
});
app.patch('/consecutivos/:consecutivoId', (req, res) => {
    Consecutivo.findByIdAndUpdate({
            '_id': req.params.consecutivoId
        }, {
            $set: req.body
        })
        .then((usuarios) => res.send(usuarios))
        .catch((error) => console.log(error));
});
app.delete('/consecutivos/:consecutivoId', (req, res) => {
    Consecutivo.findByIdAndDelete(req.params.consecutivoId)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//Países
app.get('/paises', (req, res) => {
    Paises.find({})
        .then(paises => res.send(paises))
        .catch((error) => console.log(error))
});

app.post('/paises', (req, res) => {
    (new Paises({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'bandera': req.body.bandera
    }))
    .save()
        .then((paises) => {
            res.send(paises)
        })
        .catch((error) => console.log(error));
});

app.patch('/paises/:codigo', (req, res) => {
    Paises.findByIdAndUpdate({ '_id': req.params.codigo }, {
            $set: req.body
        })
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

app.post('/cajas', (req, res) => {
    (new Cajas({
        'codigo': req.body.descripcion,
        'fecha': req.body.fecha,
        'descripcion': req.body.descripcion,
        'dineroEntrada': req.body.dineroEntrada,
        'cajaApertura' : req.body.cajaApertura,
        'cajaCierre': req.body.cajaCierre,
        'restaurante': req.body.restaurante
    }))
    .save()
        .then((cajas) => {
            res.send(cajas)
        })
        .catch((error) => console.log(error))
});
app.patch('/cajas/:codigo', (req, res) => {
    Cajas.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((cajas) => res.send(cajas))
        .catch((error) => console.log(error));
});
app.delete('/cajas/:codigo', (req, res) => {
    Cajas.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});
//Roles y Eventos

app.get('/roles-y-eventos', (req, res) => {
    RolesEventos.find({})
        .then(rolsentos => res.send(rolsentos))
        .catch((error) => console.log(error))
});

app.post('/roles-y-eventos', (req, res) => {
    (new RolesEventos({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'descripcion': req.body.descripcion
    }))
    .save()
        .then((rolentos) => {
            res.send(rolentos)
        })
        .catch((error) => console.log(error))
});
app.patch('/roles-y-eventos/:codigo', (req, res) => {
    RolesEventos.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((roles_eventos) => res.send(roles_eventos))
        .catch((error) => console.log(error));
});
app.delete('/roles-y-eventos/:codigo', (req, res) => {
    RolesEventos.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//Privilegios

app.get('/privilegios', (req, res) => {
    Privilegios.find({})
        .then(privilegios => res.send(privilegios))
        .catch((error) => console.log(error))
});

app.post('/privilegios', (req, res) => {
    (new Privilegios({
        'codigo': req.body.codigo,
        'adminsistema': req.body.adminsistema,
        'adminseguridad': req.body.adminseguridad,
        'adminrest': req.body.adminrest,
        'admincuentas': req.body.admincuentas
    }))
    .save()
        .then((privilegios) => {
            res.send(privilegios)
        })
        .catch((error) => console.log(error))
});
app.patch('/privilegios/:codigo', (req, res) => {
    Privilegios.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((privilegios) => res.send(privilegios))
        .catch((error) => console.log(error));
});
app.delete('/privilegios/:codigo', (req, res) => {
    Privilegios.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});



//detalleUDm

app.get('/detalleUDM', (req, res) => {
    DetalleUDM.find({})
        .then(detalleudm => res.send(detalleudm))
        .catch((error) => console.log(error))
});

app.post('/detalleUDM', (req, res) => {
    (new DetalleUDM({
        'detalle': req.body.detalle
    }))
    .save()
        .then((detalleudm) => {
            res.send(detalleudm)
        })
        .catch((error) => console.log(error))
});
app.patch('/detalleUDM/:detalle', (req, res) => {
    DetalleUDM.findByIdAndUpdate({
            '_id': req.params.detalle
        }, {
            $set: req.body
        })
        .then((detalleudm) => res.send(detalleudm))
        .catch((error) => console.log(error));
});
app.delete('/detalleUDM/:detalle', (req, res) => {
    DetalleUDM.findByIdAndDelete(req.params.detalle)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

app.get('/unidad-de-medida', (req, res) => {
    UnidadMedida.find({})
        .then(udm => res.send(udm))
        .catch((error) => console.log(error));
});

app.post('/unidad-de-medida', (req, res) => {
    (new UnidadMedida({
        'codigo': req.body.codigo,
        'unidad': req.body.unidad,
        'escala': req.body.escala,
        'detalle': req.body.detalle,
        'simbolo': req.body.simbolo,
        'simbologia': req.body.simbologia
    }))
    .save()
        .then((udm) => {
            res.send(udm)
        })
        .catch((error) => console.log(error))
});

app.patch('/unidad-de-medida/:codigo', (req, res) => {
    UnidadMedida.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
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

app.get('/datoscliente', (req, res) => {
    datosCliente.find({})
        .then(dtclientes => res.send(dtclientes))
        .catch((error) => console.log(error));
});
app.post('/datoscliente', (req, res) => {
    (new datosCliente({
        'codigo': req.body.codigo,
        "nombre": req.body.nombre,
        "num_mesa": req.body.num_mesa,
        "monto": req.body.monto,
        "restaurante": req.body.restaurante,
        "hora_entrada": req.body.hora_entrada,
        "hora_salida": req.body.hora_salida,
        "duracion": req.body.duracion
    }))
    .save()
    .then((dtclientes) => { res.send(dtclientes) })
    .catch((error) => console.log(error))
});

app.patch('/datoscliente/:codigo', (req, res) => {
    datosCliente.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((dtclientes) => res.send(dtclientes))
        .catch((error) => console.log(error));
});
app.delete('/datoscliente/:codigo', (req, res) => {
    datosCliente.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//Fechas del cliente

app.get('/fechascliente', (req, res) => {
    fechasCliente.find({})
        .then(fhclientes => res.send(fhclientes))
        .catch((error) => console.log(error));
});

app.post('/fechascliente', (req, res) => {
    (new fechasCliente({
        'codigo': req.body.codigo,
        'reservacion': req.body.reservacion,
        'fechallegada': req.body.fechallegada,
        'fechareservacion': req.body.fechareservacion
    }))
    .save()
        .then((fhclientes) => {
            res.send(fhclientes)
        })
        .catch((error) => console.log(error))
});
app.patch('/fechascliente/:codigo', (req, res) => {
    fechasCliente.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((fhclientes) => res.send(fhclientes))
        .catch((error) => console.log(error));
});
app.delete('/fechascliente/:codigo', (req, res) => {
    fechasCliente.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//Información del pedido

app.get('/infopedido', (req, res) => {
    infopedido.find({})
        .then(infop => res.send(infop))
        .catch((error) => console.log(error));
});

app.post('/infopedido', (req, res) => {
    (new infopedido({
        'codigo': req.body.codigo,
        'numMesa': req.body.numMesa,
        'pedidoSilla1': req.body.pedidoSilla1,
        'pedidoSilla2': req.body.pedidoSilla2,
        'pedidoSilla3': req.body.pedidoSilla3,
        'pedidoSilla4': req.body.pedidoSilla4,
        'precioSilla1': req.body.precioSilla1,
        'precioSilla2': req.body.precioSilla2,
        'precioSilla3': req.body.precioSilla3,
        'precioSilla4': req.body.precioSilla4,
    }))
    .save()
        .then((infop) => {
            res.send(infop)
        })
        .catch((error) => console.log(error))
});
app.patch('/infopedido/:codigo', (req, res) => {
    infopedido.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((infop) => res.send(infop))
        .catch((error) => console.log(error));
});
app.delete('/infopedido/:codigo', (req, res) => {
    infopedido.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});
//Cliente

app.get('/cliente', (req, res) => {
    Cliente.find({})
        .then(cl => res.send(cl))
        .catch((error) => console.log(error));
});

app.post('/cliente', (req, res) => {
    (new Cliente({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'monto_cliente': req.body.monto_cliente,
        'detalle': req.body.detalle,
        'fecha': req.body.fecha,
        'reservacion': req.body.reservacion,
        'barra': req.body.barra,
        'restaurante': req.body.restaurante
    }))
    .save()
        .then((cl) => {
            res.send(cl)
        })
        .catch((error) => console.log(error))
});
app.patch('/cliente/:codigo', (req, res) => {
    Cliente.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((cl) => res.send(cl))
        .catch((error) => console.log(error));
});
app.delete('/cliente/:codigo', (req, res) => {
    Cliente.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//REST-ESPECIALES-BUFET
app.get('/bufet', (req, res) => {
    Bufet.find({})
        .then(bufet => res.send(bufet))
        .catch((error) => console.log(error));
});

app.post('/bufet', (req, res) => {
    (new Bufet({
        'codigo': crpyto
            .createHash("sha256")
            .update(req.body.codigo)
            .digest("hex"),
        'nombre': req.body.nombre,
        'precio': req.body.precio,
        'tipo': req.body.tipo,
        'unidad_medida': req.body.unidad_medida
    }))
    .save()
        .then((bufet) => {
            res.send(bufet)
        })
        .catch((error) => console.log(error))
});


app.patch('/bufet/:bufetId', (req, res) => {
    Bufet.findByIdAndUpdate({
            '_id': req.params.bufetId
        }, {
            $set: req.body
        })
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

//ESPECIALIDADES

app.get('/especialidades', (req, res) => {
    Especialides.find({})
        .then(espe => res.send(espe))
        .catch((error) => console.log(error));
});

app.post('/especialidades', (req, res) => {
    (new Especialides({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'ingredientes': req.body.ingredientes,
        'detalle': req.body.detalle,
        'precio': req.body.precio
    }))
    .save()
        .then((espe) => {
            res.send(espe)
        })
        .catch((error) => console.log(error))
});
app.patch('/especialidades/:codigo', (req, res) => {
    Especialides.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((espe) => res.send(espe))
        .catch((error) => console.log(error));
});
app.delete('/especialidades/:codigo', (req, res) => {
    Especialides.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});


//REST-BEBIDAS-CALIENTES

app.get('/bebidas_calientes', (req, res) => {
    BebidasCalientes.find({})
        .then(bebidas_calientes => res.send(bebidas_calientes))
        .catch((error) => console.log(error));
});

app.post('/bebidas_calientes', (req, res) => {
    (new BebidasCalientes({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'ingredientes': req.body.ingredientes,
        'precio': req.body.precio,
        'restaurante': req.body.restaurante,
        'descripcion': req.body.descripcion
    }))
    .save()
        .then((bebidas_calientes) => {
            res.send(bebidas_calientes)
        })
        .catch((error) => console.log(error))
});

app.patch('/bebidas_calientes/:codigo', (req, res) => {
    BebidasCalientes.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((bebidas_calientes) => res.send(bebidas_calientes))
        .catch((error) => console.log(error));
});
app.delete('/bebidas_calientes/:codigo', (req, res) => {
    BebidasCalientes.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//REST-BEBIDAS-FRÍAS

app.get('/bebidas_frias', (req, res) => {
    BebidasFrias.find({})
        .then(bebidas_frias => res.send(bebidas_frias))
        .catch((error) => console.log(error));
});

app.post('/bebidas_frias', (req, res) => {
    (new BebidasFrias({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'ingredientes': req.body.ingredientes,
        'precio': req.body.precio,
        'restaurante': req.body.restaurante,
        'descripcion': req.body.descripcion
    }))
    .save()
        .then((bebidas_frias) => {
            res.send(bebidas_frias)
        })
        .catch((error) => console.log(error))
});
app.patch('/bebidas_frias/:codigo', (req, res) => {
    BebidasFrias.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((bebidas_frias) => res.send(bebidas_frias))
        .catch((error) => console.log(error));
});
app.delete('/bebidas_frias/:codigo', (req, res) => {
    BebidasFrias.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//REST-BEBIDAS-GASEOSAS

app.get('/bebidas_gaseosas', (req, res) => {
    BebidasGaseosas.find({})
        .then(bebidas_gaseosas => res.send(bebidas_gaseosas))
        .catch((error) => console.log(error));
});

app.post('/bebidas_gaseosas', (req, res) => {
    (new BebidasGaseosas({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'marca': req.body.marca,
        'nacionalidad': req.body.nacionalidad,
        'precio': req.body.precio,
        'restaurante': req.body.restaurante,
        'cantidad': req.body.cantidad,
        'descripcion': req.body.descripcion
    }))
    .save()
        .then((bebidas_gaseosas) => {
            res.send(bebidas_gaseosas)
        })
        .catch((error) => console.log(error))
});

app.patch('/bebidas_gaseosas/:codigo', (req, res) => {
    BebidasGaseosas.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((bebidas_gaseosas) => res.send(bebidas_gaseosas))
        .catch((error) => console.log(error));
});
app.delete('/bebidas_gaseosas/:codigo', (req, res) => {
    BebidasGaseosas.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//REST-BEBIDAS-LICORES

app.get('/licores', (req, res) => {
    Licores.find({})
        .then(licores => res.send(licores))
        .catch((error) => console.log(error));
});

app.post('/licores', (req, res) => {
    (new Licores({
        'codigo': req.body.codigo,
        'restaurante': req.body.restaurante,
        'nombre': req.body.nombre,
        'cantidad': req.body.cantidad,
        'marca': req.body.marca,
        'descripcion': req.body.descripcion,
        'nacionalidad': req.body.nacionalidad,
        'precio_unitario': req.body.precio_unitario,
        'precio_botella': req.body.precio_botella
    }))
    .save()
        .then((licores) => {
            res.send(licores)
        })
        .catch((error) => console.log(error))
});

app.patch('/licores/:codigo', (req, res) => {
    Licores.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((licores) => res.send(licores))
        .catch((error) => console.log(error));
});

app.delete('/licores/:codigo', (req, res) => {
    Licores.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//REST-BEBIDAS-VINOS
app.get('/vinos', (req, res) => {
    Vinos.find({})
        .then(vinos => res.send(vinos))
        .catch((error) => console.log(error));
});

app.post('/vinos', (req, res) => {
    (new Vinos({
        'codigo': req.body.codigo,
        'restaurante': req.body.restaurante,
        'nombre': req.body.nombre,
        'cantidad': req.body.cantidad,
        'marca': req.body.marca,
        'descripcion': req.body.descripcion,
        'nacionalidad': req.body.nacionalidad,
        'precio_unitario': req.body.precio_unitario,
        'anio_cosecha': req.body.anio_cosecha,
        'precio_botella': req.body.precio_botella
    }))
    .save()
        .then((vinos) => {
            res.send(vinos)
        })
        .catch((error) => console.log(error))
});

app.patch('/vinos/:codigo', (req, res) => {
    Vinos.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((vinos) => res.send(vinos))
        .catch((error) => console.log(error));
});

app.delete('/vinos/:codigo', (req, res) => {
    Vinos.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//CLIENTES

app.get('/empleados', (req, res) => {
    Empleados.find({})
        .then(empleados => res.send(empleados))
        .catch((error) => console.log(error))
});

app.post('/empleados', (req, res) => {
    (new Empleados({
        'codigo': req.body.codigo,
        'cedula': req.body.cedula,
        'nombre': req.body.nombre,
        'primer_apellido': req.body.primer_apellido,
        'segundo_apellido': req.body.segundo_apellido,
        'telefono_1': req.body.telefono_1,
        'telefono_2': req.body.telefono_2,
        'puesto': req.body.puesto,
        'nacionalidad': req.body.nacionalidad
    }))
    .save()
        .then((empleados) => {
            res.send(empleados)
        })
        .catch((error) => console.log(error))
});
app.patch('/empleados/:codigo', (req, res) => {
    Empleados.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((empleados) => res.send(empleados))
        .catch((error) => console.log(error));
});
app.delete('/empleados/:codigo', (req, res) => {
    Empleados.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//RESTAURANTES
app.get('/restaurantes', (req, res) => {
    Restaurantes.find({})
        .then(restaurantes => res.send(restaurantes))
        .catch((error) => console.log(error));
});

app.post('/restaurantes', (req, res) => {
    (new Restaurantes({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'direccion': req.body.direccion,
        'cantidadClientes': req.body.cantidadClientes,
        'telefono': req.body.telefono
    })).save()
    .then((restaurantes) => {
            res.send(restaurantes)
        })
        .catch((error) => console.log(error))
});

app.patch('/restaurantes/:codigo', (req, res) => {
    Restaurantes.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((restaurantes) => res.send(restaurantes))
        .catch((error) => console.log(error));
});

app.delete('/restaurantes/:codigo', (req, res) => {
    Restaurantes.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//BITACORA

app.get('/bitacoras', (req, res) => {
    Bitacora.find({})
        .then(bitacoras => res.send(bitacoras))
        .catch((error) => console.log(error));
});

app.post('/bitacoras', (req, res) => {
    (new Bitacora({
        'codigo': req.body.codigo,
        'fecharango': req.body.fecharango,
        'usuario': req.body.usuario,
        'fechaini': req.body.fechaini,
        'fechafin': req.body.fechafin,
        'descripcion': req.body.descripcion
    })).save()
    .then((bitacoras) => {
            res.send(bitacoras)
        })
        .catch((error) => console.log(error))
});

app.patch('/bitacoras/:codigo', (req, res) => {
    Bitacora.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((bitacoras) => res.send(bitacoras))
        .catch((error) => console.log(error));
});

app.delete('/bitacoras/:codigo', (req, res) => {
    Bitacora.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//FACTURACION

app.get('/facturacion', (req, res) => {
    Facturacion.find({})
        .then(fact => res.send(fact))
        .catch((error) => console.log(error));
});

app.post('/facturacion', (req, res) => {
    (new Facturacion({
        'codigo': req.body.codigo,
        'fecha': req.body.fecha,
        'descripcion': req.body.descripcion,
        'dineroentrada': req.body.dineroentrada,
        'cajaapertura': req.body.cajaapertura,
        'cajacierre': req.body.cajacierre,
        'restaurante': req.body.restaurante,
        'estadocuenta': req.body.estadocuenta
    })).save()
    .then((fact) => {
            res.send(fact)
        })
        .catch((error) => console.log(error))
});

app.patch('/facturacion/:codigo', (req, res) => {
    Facturacion.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((fact) => res.send(fact))
        .catch((error) => console.log(error));
});

app.delete('/facturacion/:codigo', (req, res) => {
    Facturacion.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});


//MARCAS
app.get('/marcas', (req, res) => {
    Marcas.find({})
        .then(marcas => res.send(marcas))
        .catch((error) => console.log(error));
});

app.post('/marcas', (req, res) => {
    (new Marcas({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'descripcion': req.body.descripcion,
        'nacionalidad': req.body.nacionalidad,
        'nombre_empresa': req.body.nombre_empresa,
        'telefono_empresa': req.body.telefono_empresa,
        'cedula_juridicaEmpresa': req.body.cedula_juridicaEmpresa,
        'detalle_empresa': req.body.detalle_empresa
    }))
    .save()
        .then((marcas) => {
            res.send(marcas)
        })
        .catch((error) => console.log(error))
});

app.patch('/marcas/:codigo', (req, res) => {
    Marcas.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((marcas) => res.send(marcas))
        .catch((error) => console.log(error));
});

app.delete('/marcas/:codigo', (req, res) => {
    Marcas.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

// INFO MARCAS

app.get('/info-marcas', (req, res) => {
    infoMarcas.find({})
        .then(infomarcas => res.send(infomarcas))
        .catch((error) => console.log(error));
});

app.post('/info-marcas', (req, res) => {
    (new infoMarcas({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'descripcion': req.body.descripcion,
        'nacionalidad': req.body.nacionalidad,
        'foto': req.body.foto
    }))
    .save()
        .then((infomarcas) => {
            res.send(infomarcas)
        })
        .catch((error) => console.log(error))
});

app.patch('/info-marcas/:codigo', (req, res) => {
    infoMarcas.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((infomarcas) => res.send(infomarcas))
        .catch((error) => console.log(error));
});

app.delete('/info-marcas/:codigo', (req, res) => {
    infoMarcas.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//INFO CONTACTO

app.get('/info-contacto', (req, res) => {
    infoContacto.find({})
        .then(infoContacto => res.send(infoContacto))
        .catch((error) => console.log(error));
});

app.post('/info-contacto', (req, res) => {
    (new infoContacto({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'detalleempresa': req.body.detalleempresa,
        'telefono': req.body.telefono,
        'foto': req.body.foto
    }))
    .save()
        .then((infocontacto) => {
            res.send(infocontacto)
        })
        .catch((error) => console.log(error))
});

app.patch('/info-contacto/:codigo', (req, res) => {
    infoContacto.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((infocontacto) => res.send(infocontacto))
        .catch((error) => console.log(error));
});

app.delete('/info-contacto/:codigo', (req, res) => {
    infoContacto.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});


//COMESTIBLES
app.get('/comestibles', (req, res) => {
    Comestibles.find({})
        .then(comestibles => res.send(comestibles))
        .catch((error) => console.log(error));
});

app.post('/comestibles', (req, res) => {
    (new Comestibles({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'cantidad': req.body.cantidad,
        'restaurante': req.body.restaurante,
        'tipo_comestible': req.body.tipo_comestible,
        'marca': req.body.marca,
        'clase_comestible': req.body.clase_comestible,
        'linea_comestible': req.body.linea_comestible,
        'unidad_medida': req.body.unidad_medida
    }))
    .save()
        .then((comestibles) => {
            res.send(comestibles)
        })
        .catch((error) => console.log(error))
});

app.patch('/comestibles/:codigo', (req, res) => {
    Comestibles.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((comestibles) => res.send(comestibles))
        .catch((error) => console.log(error));
});

app.delete('/comestibles/:codigo', (req, res) => {
    Comestibles.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//DESECHABLES Y EMPAQUES
app.get('/desechables_y_empaques', (req, res) => {
    Desechables.find({})
        .then(desechables_y_empaques => res.send(desechables_y_empaques))
        .catch((error) => console.log(error));
});

app.post('/desechables_y_empaques', (req, res) => {
    (new Desechables({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'cantidad': req.body.cantidad,
        'nombre_restaurante': req.body.nombre_restaurante,
        'marca': req.body.marca,
        'descripcion': req.body.descripcion
    }))
    .save()
        .then((desechables_y_empaques) => {
            res.send(desechables_y_empaques)
        })
        .catch((error) => console.log(error))
});

app.patch('/desechables_y_empaques/:codigo', (req, res) => {
    Desechables.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((desechables_y_empaques) => res.send(desechables_y_empaques))
        .catch((error) => console.log(error));
});

app.delete('/desechables_y_empaques/:codigo', (req, res) => {
    Desechables.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//LIMPIEZA E HIGIENE
app.get('/limpieza', (req, res) => {
    Limpieza.find({})
        .then(limpieza => res.send(limpieza))
        .catch((error) => console.log(error));
});

app.post('/limpieza', (req, res) => {
    (new Limpieza({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'cantidad': req.body.cantidad,
        'nombre_restaurante': req.body.nombre_restaurante,
        'marca': req.body.marca,
        'descripcion': req.body.descripcion
    }))
    .save()
        .then((limpieza) => {
            res.send(limpieza)
        })
        .catch((error) => console.log(error))
});

app.patch('/limpieza/:codigo', (req, res) => {
    Limpieza.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((limpieza) => res.send(limpieza))
        .catch((error) => console.log(error));
});

app.delete('/limpieza/:codigo', (req, res) => {
    Limpieza.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//TECNOLOGIA
app.get('/tecnologia', (req, res) => {
    Tecnologia.find({})
        .then(tecnologia => res.send(tecnologia))
        .catch((error) => console.log(error))
});

app.post('/tecnologia', (req, res) => {
    (new Tecnologia({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'cantidad': req.body.cantidad,
        'nombre_restaurante': req.body.nombre_restaurante,
        'precio': req.body.precio,
        'marca': req.body.marca,
        'descripcion': req.body.descripcion
    }))
    .save()
        .then((tecnologia) => {
            res.send(tecnologia)
        })
        .catch((error) => console.log(error))
});

app.patch('/tecnologia/:codigo', (req, res) => {
    Tecnologia.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((tecnologia) => res.send(tecnologia))
        .catch((error) => console.log(error));
});

app.delete('/tecnologia/:codigo', (req, res) => {
    Tecnologia.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

//EQUIPOS Y UTENSILIOS
app.get('/equipos', (req, res) => {
    Equipos.find({})
        .then(equipos => res.send(equipos))
        .catch((error) => console.log(error))
});

app.post('/equipos', (req, res) => {
    (new Equipos({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'cantidad': req.body.cantidad,
        'nombre_restaurante': req.body.nombre_restaurante,
        'marca': req.body.marca,
        'descripcion': req.body.descripcion
    }))
    .save()
        .then((equipos) => {
            res.send(equipos)
        })
        .catch((error) => console.log(error))
});

app.patch('/equipos/:codigo', (req, res) => {
    Equipos.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((equipos) => res.send(equipos))
        .catch((error) => console.log(error));
});

app.delete('/equipos/:codigo', (req, res) => {
    Equipos.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});


//PROVEEDORES
app.get('/proveedores', (req, res) => {
    Proveedores.find({})
        .then(proveedores => res.send(proveedores))
        .catch((error) => console.log(error))
});

app.post('/proveedores', (req, res) => {
    (new Proveedores({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'primer_apellido': req.body.primer_apellido,
        'segundo_apellido': req.body.segundo_apellido,
        'telefono_oficina': req.body.telefono_oficina,
        'fax': req.body.fax,
        'celular': req.body.celular,
        'cedula': req.body.cedula,
        'fecha_ingreso': req.body.fecha_ingreso,
        'nombre_proveedor': req.body.nombre_proveedor,
        'correo': req.body.correo,
        'direccion': req.body.direccion,
        'nombre_contactoEmpresa': req.body.nombre_contactoEmpresa,
        'telefono_contactoEmpresa': req.body.telefono_contactoEmpresa,
        'direccion_empresa': req.body.direccion_empresa
    }))
    .save()
        .then((proveedores) => {
            res.send(proveedores)
        })
        .catch((error) => console.log(error))
});

app.patch('/proveedores/:codigo', (req, res) => {
    Proveedores.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((proveedores) => res.send(proveedores))
        .catch((error) => console.log(error));
});

app.delete('/proveedores/:codigo', (req, res) => {
    Proveedores.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});

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
        'numero': req.body.numero,
        'cantidad_sillas': req.body.cantidad_sillas,
        'nombre_restaurante': req.body.nombre_restaurante
    }))
    .save()
        .then((mesas) => {
            res.send(mesas)
        })
        .catch((error) => console.log(error))
});
app.patch('/mesas/:codigo', (req, res) => {
    Mesas.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
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

app.post('/puestos', (req, res) => {
    (new Puestos({
        'codigo': req.body.codigo,
        'nombre': req.body.nombre,
        'interno': req.body.interno,
        'externo': req.body.externo,
        'rol_restaurante': req.body.rol_restaurante
    }))
    .save()
        .then((puestos) => {
            res.send(puestos)
        })
        .catch((error) => console.log(error))
});
app.patch('/puestos/:codigo', (req, res) => {
    Puestos.findByIdAndUpdate({
            '_id': req.params.codigo
        }, {
            $set: req.body
        })
        .then((puestos) => res.send(puestos))
        .catch((error) => console.log(error));
});
app.delete('/puestos/:codigo', (req, res) => {
    Puestos.findByIdAndDelete(req.params.codigo)
        .then((list) => res.send(list))
        .catch((error) => console.log(error));
});


app.patch('/datoscliente/:codigo', (req, res) =>{
    Cliente.findByIdAndUpdate( {'_id' : req.params.codigo}, { $set : req.body})
    // UPDATE WHERE
    .then((cliente) => res.send(cliente))
    .catch((error) => console.log(error));
});

var port = 3000;

app.listen(port, () => {
    console.log('RestauranteJS funciona');
});

