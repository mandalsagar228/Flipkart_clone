import express from "express";

import { signupData, LoginDetail } from "../Controllers/user-controller.js";
import getProducts from "../Controllers/product-conroller.js";

const router = express.Router();

router.post("/signup", signupData);

router.post("/login", LoginDetail);

router.get("/products", getProducts); // For getting default products that stored in DB.

export default router;
