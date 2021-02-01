const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:tq3uNYDUrKblLSJi@laboratorios.2ools.mongodb.net/labsdb?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log('Base de datos labdb conectada'))
.catch((err) => console.log(err));

module.exports = mongoose;