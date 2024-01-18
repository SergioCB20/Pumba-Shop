import {Router} from "express"
import usersController from "../controllers/users.controller.js";

const router = Router();

//Controladores de usuario y lo relacionado al mismo

router.get("/",usersController.getUsers);
router.get("/:id",usersController.getUser);
router.post("/",usersController.addUser);
router.post("/login",usersController.verifyUser)
router.put("/:id",usersController.updateUser);
router.delete("/:id",usersController.deleteUser);
export default router;