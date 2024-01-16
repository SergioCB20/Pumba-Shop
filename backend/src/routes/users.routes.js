import {Router} from "express"
import usersController from "../controllers/users.controller.js";

const router = Router();


//Cuando acceda a la ruta raiz, va a manejar la request y la response mediante un callback
router.get("/", (req,res)=>{
    res.end("<h1>El servidor esta funcionando</h1>")
})
router.get("/users",usersController.getUsers);
router.get("/users/:id",usersController.getUser);
router.post("/users",usersController.addUser);
router.put("/users:id",usersController.updateUser);
router.delete("/users:id",usersController.deleteUser);
export default router;