import mongoose from "mongoose";
const url="mongodb://localhost:27017/cafe-branch";
// localhost:127.0.0.1

mongoose.connect(url);

const connection= mongoose.connection;
connection.once("open",()=>{
    console.log("base de datos conectada")
});