import { Router } from "express";
import { cartController } from '../../../controllers/cart';

const router = Router();

//Acá al igual que en el index del product pasamos los metodos por parametro en vez de por ejemplo haciendo un post

router.post("/add", cartController.add);

router.get("/get/:idCart", cartController.get);

router.get("/getAll", cartController.getAll);

router.post("/addProduct", cartController.addProduct);

router.delete("/deleteProduct", cartController.deleteProduct);



export default router;