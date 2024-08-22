import { Router } from "express";
import productRouter from "../modules/products/product.routes.js";

const router = Router();

router.use("/product", productRouter);

export default router;