import bcrypt from "bcrypt"
import dotenv from "dotenv"

import { userRepository } from "../db/user.repository.js"

dotenv.config();

class AuthService {
    async authenticateUser(email, password) {
        const user = await userRepository.selectByEmail(email);

        if (!user) throw new Error("Invalid credentials");

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) throw new Error("Invalid credentials");

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        
        return token
    }
}

export const authService = new AuthService();