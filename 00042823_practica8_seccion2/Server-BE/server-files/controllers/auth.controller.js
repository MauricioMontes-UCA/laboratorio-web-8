import { authService } from "../services/auth.services.js";

class AuthController {
    async signIn(req, res){
        try {
            const { email, password } = req.body;
            const token = await authService.authenticateUser(email, password);
            res.status(200).json({ token })
            
        } 
        catch (err) {
            res.status(401).json({ error: err.message });
            console.error("No se ha autorizado el acceso.")
        }
    }
}

export const authController = new AuthController();