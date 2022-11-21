const mongoose=require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {
        console.log(`No se logro la conexion con la base de datos`)
    })
}

module.exports=connectDatabase;













/*const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost:27017/webuy';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});*/





















/*const mongoose=require('mongoose')

module.exports = () =>{

    const connect = () => {
        mongoose.connect(
            process.env.URI, 
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true  

            },
            (err) =>{
                if (err){
                    console.log('DB: Error!!');
                }else{
                    console.log('Conexión Correcta')
                }

            }
        )
    }

    connect();
}*/

