import mongoose,{Schema} from "mongoose";

const productoSchema= new Schema({
    nombreProducto:{
        type:String,
        required:true,
        unique:true,
        minLength:2,
        maxLenght:50
    },
    precio:{
        type:Number,
        required:true,
        min:1,
        max:1000
    },
    imagen:{
        type:String,
        required:true
    },
    categoria:{
        type:String,
        required:true,
    }
})
// aqui realizamos el modelo
const Producto=mongoose.model("producto",productoSchema);
export default Producto;