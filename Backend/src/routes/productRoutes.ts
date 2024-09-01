import { Router } from "express";

import { getProduct,createNewProduct } from "../controllers/productController";

const router = Router();

router.get("/", getProduct);

router.post("/", createNewProduct)

export default router;
