const mongoose = require('mongoose'); // importar mongoose

const dbUri = "mongodb+srv://admin:1234@cluster0.zduxlxi.mongodb.net/employee_db?appName=Cluster0"

mongoose.set('strictQuery', false);

// exportando a função
module.exports = () => {
    return mongoose.connect(dbUri);
}  