import express from "express";
import morgan from "morgan";
//Routes
import userRoutes from "./routes/users.routes.js";

const app = express();

//Settings
app.set("port",4000);

//Middlewares (Son funciones intermedias entre la petición del cliente y la respuesta del servidor)
app.use(morgan("dev"));//listado de las peticiones (ruta, tipo de peticion, codigo de respuesta)

//Cuando acceda a la ruta raiz, va a manejar la request y la response mediante un callback
app.get("/", (req,res)=>{
    res.end("<h1>El servidor esta funcionando</h1>")
})

app.use("/users",userRoutes);

export default app;