import { AuthService } from './auth.service';
import { Request, Response, NextFunction } from 'express';


export class AuthController {
    async login(req: Request, res: Response, next: NextFunction) {
        const authService = new AuthService();
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const user = await authService.validateUser(email, password);

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = await authService.login(user);

        return res.status(200).json(token);
    }
}