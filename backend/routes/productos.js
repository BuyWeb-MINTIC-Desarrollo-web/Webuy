const express= require("express")
const router = express.Router();

const {getProducts, newProduct, getProductByID} = require("../controllers/productosControllers") //Json desde controlador

router.route('/productos').get(getProducts) //Creamos la ruta para ver los productos
router.route('/producto/nuevo').post(newProduct); //Creamos la ruta para un nuevo producto
router.route('/producto/:id').get(getProductByID); // Ruta para buscar por ID

module.exports=router;