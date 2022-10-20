import express from "express";

// crear uns instacia e express
const app = express();

// creamos una variable
app.set("port",process.env.PORT|| 4000);
// usar el puerto
app.listen(app.get("port"),()=>{
    console.log("Estoy en el puerto "+app.get("port"));
})

console.log("hola mundo");
