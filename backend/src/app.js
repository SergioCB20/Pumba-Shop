import express from "express";
import morgan from "morgan";
//Routes
import router from "./routes/users.routes.js";

const app = express();

//Settings
app.set("port",4000);

//Middlewares (Son funciones intermedias entre la petición del cliente y la respuesta del servidor)
app.use(morgan("dev"));//listado de las peticiones (ruta, tipo de peticion, codigo de respuesta)
app.use(router);

export default app;