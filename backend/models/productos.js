const mongoose=require('mongoose')

const productosSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: [true, "Por favor registra el nombre del producto."],
        trim: true,
        maxLength: [120, "El nombre del producto no puede exceder 120 caracteres"]
    },

    precio:{
        type:Number,
        require:[true,"Por favor registre el precio del producto"],
        maxLength:[8,"El previo del producto no puede ser superior a 99'999.999"],
        default: 0.0
    },

    decripcion:{
        type:String,
        require:[true,"Por favor registr una descripción del producto."]
    },

    inventario:{
        type:Number,
        require:[5,"Maximo se pueden vender 99999 productos del mismo"],
        default: 0
    },

    imagen:[
        {
            public_id:{
                type:String,
                require:true
            },
            url:{
                type:String,
                require:true
            }

        }
    ],
    categoria:{
        type:String,
        require:[true,"Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Güisqui",
                "Cerveza",
                "Aguardiente",
                "Otros"
            ]
        }

    },
    fechaCreacion:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("productos", productosSchema)