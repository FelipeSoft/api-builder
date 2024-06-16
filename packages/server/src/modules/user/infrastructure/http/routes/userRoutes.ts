import { Router } from "express";
import AuthenticationService from "@modules/user/services/auth/AuthenticationService";
import * as Yup from "yup";

const userRoutes = Router();

const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required()
});
const authService = new AuthenticationService();

userRoutes.post("/session-start", async (req, res) => {
    await schema.validate(req.body, { abortEarly: false });
    const { email, password } = req.body;
    await authService.login({ email, password });
    return res.status(200).json({ message: "OK" });
});

userRoutes.post("/new-account", async (req, res) => {
    await schema.validate(req.body, { abortEarly: false });
    const { email, password } = req.body;
    await authService.register({ email, password });
    return res.status(201).json({ message: "created user successfully" });
});

export default userRoutes;
