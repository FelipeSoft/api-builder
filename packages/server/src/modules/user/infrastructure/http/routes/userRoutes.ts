import { Router } from "express";
import * as Yup from "yup";
import User, { UserDocument } from "@modules/user/infrastructure/mongoose/schemas/User";
import AuthenticationService from "@modules/user/services/auth/AuthenticationService";

const userRoutes = Router();

userRoutes.post("/session-start", async (req, res) => {
    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required()
    });

    try {
        await schema.validate(req.body, { abortEarly: false });
    } catch (error: any) {
        console.log(error.errors);
        return res.status(400).json({ error: "invalid data", details: error.errors });
    }

    const authService = new AuthenticationService();
    authService.execute({
        email: req.body.email,
        password: req.body.password
    });
    return res.status(200).json({ message: "OK" });
});

userRoutes.post("/new-account", (req, res) => {

});

export default userRoutes;