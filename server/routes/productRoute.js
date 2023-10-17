import express from "express";

import { authorizeRoles, isAuthenticatedUser, } from "../middleware/auth.js";

import { createProduct, createProductReview, deleteProduct, deleteProductReview, getAllProduct, getProductReviews, productDetails, updateProduct } from "../controllers/ProductController.js";



const router = express.Router();


// RAFF PART

//create product
// router.get("/products", getAllProduct);
// // router.post("/products", isAuthenticatedUser, authorizeRoles("admin"), createProduct);
// router.post("/admin/products/new", createProduct);
// router.patch("/admin/products/:id", updateProduct);
// router.delete("/admin/products/:id", deleteProduct);
// router.get("/products/:id", productDetails);
// router.put("/review", createProductReview);
// router.get("/reviews", getProductReviews);
// router.delete("/reviews", deleteProductReview);




// MARN PART 

//create product
router.get("/products", getAllProduct);
// router.post("/products", isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.post("/admin/products/new", isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.patch("/admin/products/:id", isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router.delete("/admin/products/:id", isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
router.get("/products/:id", productDetails);
router.put("/review", isAuthenticatedUser, createProductReview);
router.get("/reviews", getProductReviews);
router.delete("/reviews", isAuthenticatedUser, deleteProductReview);


export default router;

