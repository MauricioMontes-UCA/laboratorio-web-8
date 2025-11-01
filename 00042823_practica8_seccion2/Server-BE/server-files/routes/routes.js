import express, { response } from "express"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import users from "../db/dummyDB.js"
import verifyToken from "../middlewares/middleware.js"
import { userController } from "../controllers/user.controller.js"
import { authController } from "../controllers/auth.controller.js"

dotenv.config();

const router = express.Router()

router.get("/users", userController.getUsers)
router.get("/users/:id", userController.getUserById)
router.post("/users", userController.createUser)
router.put("/users/:id", userController.updateUser)
router.delete("/users/:id", userController.deleteUser)
router.post("/signin", authController.signIn)

// ==================================================================================================

router.get("/protected", verifyToken, (req, res) => {
    res.status(200).json({ 
        message: "Protected data accesed", 
        user: req.user 
    });
})

export default router;