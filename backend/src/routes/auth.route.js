import express from "express"
import { signup,updateProfile,login,logout } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";


const router = express.Router();


router.post("/signup", signup)
router.post("/login", login)
router.post("/logout",logout)

router.put("/update-profile", protectRoute, updateProfile);

export default router;
