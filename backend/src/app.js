import express from "express";
import morgan from "morgan";
import cors from "cors"
//Routes
import userRoutes from "./routes/users.routes.js";
import productosRoutes from "./routes/productos.routes.js";

const app = express();

//Settings
app.set("port",process.env.PORT || 3001);

//Middlewares (Son funciones intermedias entre la petición del cliente y la respuesta del servidor)
app.use(morgan("dev"));//listado de las peticiones (ruta, tipo de peticion, codigo de respuesta)


app.use(cors())
app.use(express.json())

//Cuando acceda a la ruta raiz, va a manejar la request y la response mediante un callback
app.get("/", (req,res)=>{
    res.end("<h1>El servidor esta funcionando</h1>")
})

app.use("/users",userRoutes);
app.use("/productos",productosRoutes)

export default app;