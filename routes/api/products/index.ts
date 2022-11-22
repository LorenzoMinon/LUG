import { Router } from "express";
import { productController } from '../../../controllers/product';

//Aca tenemos cada metodo dentro de esta ruta

const router = Router();

router.post("/add", productController.add); //por ejemplo estos metodos add/getAll/delete estan dentro del productcontroller

router.get("/getAll", productController.getAll);

router.delete("/delete", productController.delete);

export default router;
