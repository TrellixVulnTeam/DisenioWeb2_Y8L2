var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:tq3uNYDUrKblLSJi@laboratorios.2ools.mongodb.net/labsdb?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log('DB connectada'))
.catch((error) => console.log(error));

module.exports = mongoose;