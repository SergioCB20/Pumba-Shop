import e, {Router} from "express";
import productosControllers from "../controllers/productos.controllers.js";

const router = Router();

router.get("/",productosControllers.getProducts)

export default router