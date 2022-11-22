import { Router } from "express";
import cartsRoutes from "./carts";
import productsRoutes from "./products";

const router = Router();
// Como tenemos dos rutas, vamos a tener dos modelos.
router.use("/carts", cartsRoutes);
router.use("/products", productsRoutes);


export default router;
