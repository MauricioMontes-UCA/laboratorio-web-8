import express from "express"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import users from "./dummyDB.js"
import verifyToken from "./middleware.js"

const router = express.Router()

dotenv.config();

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({ token });
})

router.get("/protected", verifyToken, (req, res) => {
    res.status(200).json({ 
        message: "Protected data accesed", 
        user: req.user 
    });
})

export default router;