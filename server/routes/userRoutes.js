import express from "express";
import { authorizeRoles, isAuthenticatedUser } from "../middleware/auth.js";
import { deleteUser, forgotPassword, getAllUsers, getSingleUser, getUserDetails, loginUser, logoutUser, registerUser, resetPassword, updatePassword, updateProfile, updateUserRole } from "../controllers/userController.js";



const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/password/forgot", forgotPassword);
// router.patch("/password/reset/:token", resetPassword);
// router.put("/password/update", updatePassword);
// router.get("/logout", logoutUser);
// router.get("/me", getUserDetails);
// router.put("/me/update", updateProfile);
// router.get("/admin/users", getAllUsers);
// router.get("/admin/user/:id", getSingleUser);
// router.put("/admin/user/:id", updateUserRole);
// router.delete("/admin/user/:id", deleteUser);




// main parts 
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/password/forgot", forgotPassword);
router.patch("/password/reset/:token", resetPassword);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.get("/logout", logoutUser);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.put("/me/update", isAuthenticatedUser, updateProfile);
router.get("/admin/users", isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
router.get("/admin/user/:id", isAuthenticatedUser, authorizeRoles("admin"), getSingleUser);
router.put("/admin/user/:id", isAuthenticatedUser, authorizeRoles("admin"), updateUserRole);
router.delete("/admin/user/:id", isAuthenticatedUser, authorizeRoles("admin"), deleteUser);


export default router;
