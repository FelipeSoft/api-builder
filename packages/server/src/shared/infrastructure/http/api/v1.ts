import userRoutes from "@modules/user/infrastructure/http/routes/userRoutes";
import { Router } from "express";

const routes = Router();

routes.use("/api/v1", userRoutes);

export default routes;