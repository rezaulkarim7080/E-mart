import express from "express";


import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";
import { createOrder, deleteOrder, getAllOrders, getMyOrders, getSingleOrder, updateOrderStatus } from "../controllers/orderController.js";

const router = express.Router();



// router.post("/order/new", createOrder);
// router.get("/order/:id", getSingleOrder);
// router.get("/orders/me", getMyOrders);
// router.get("/orders", getAllOrders);
// router.put("/admin/order/:id", updateOrderStatus);
// router.delete("/admin/order/:id", deleteOrder);


// mainpart 

router.post("/order/new", isAuthenticatedUser, createOrder);
router.get("/order/:id", isAuthenticatedUser, getSingleOrder);
router.get("/orders/me", isAuthenticatedUser, getMyOrders);
//
router.get("/admin/orders", isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);
router.put("/admin/order/:id", isAuthenticatedUser, authorizeRoles("admin"), updateOrderStatus);
router.delete("/admin/order/:id", isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);



export default router;