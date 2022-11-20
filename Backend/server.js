const app=require("./app");

//Setear mi archivo de configuración
const dotenv = require("dotenv");
dotenv.config({path: 'backend/config/config.env'})

const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto:  ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})