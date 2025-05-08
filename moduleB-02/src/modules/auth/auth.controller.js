import { authService } from "./auth.service.js"

export const AuthController = {
    login: async (req, res) => {
        const result = await authService.login(req.body.username, req.body.password);

        return res.status(200).json(result)
    },
    logout: async (req, res) => {
        console.log(req.userToken)
        const result = await authService.logout(req.userToken);

        return res.status(200).json(result);
    }
}