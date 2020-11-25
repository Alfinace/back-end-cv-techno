const mongoose  = require('mongoose')
try {
     mongoose.connect('mongodb://localhost:27017/cv',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
     })   
console.info('Connected to Mongodb');;
} catch (error) {
    console.log('Failed to connect to Mongodb: ' + error);
}
module.exports = {mongoose};