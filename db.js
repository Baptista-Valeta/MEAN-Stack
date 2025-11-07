const mongoose = require('mongoose'); // importar mongoose

const dbUri = "mongodb+srv://admin:<admin1234>@cluster0.4khd2dh.mongodb.net/employee_db?appName=Cluster0"

// exportando a função
module.exports = () => {
    return mongoose.connect(dbUri, 
        {userNewUrlParser: true, useUnifiedTopology: true}
    );
}  