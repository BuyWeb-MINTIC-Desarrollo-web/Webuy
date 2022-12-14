const app=require("./app");
const connectDatabase = require("./config/database");


//Setear mi archivo de configuración
const dotenv = require("dotenv");
dotenv.config({path: 'backend/config/config.env'})

//Configurar base de datos
connectDatabase();


// Llamamos al server
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto:  ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})