const express=require("express");
const { getProducts } = require("./controllers/productosControllers");
const app = express();

app.use(express.json());

//Importar rutas
const productos=require("./routes/productos")

app.use('/api',productos)

module.exports = app;