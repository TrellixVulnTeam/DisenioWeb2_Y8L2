const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dbUser:BRSTMkong98@testcluster.rnoqj.azure.mongodb.net/quizdb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
.then(() => console.log('Quizdb connected'))
.catch((err) => console.log(err));

module.exports = mongoose;