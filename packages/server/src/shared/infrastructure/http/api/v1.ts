import { Router } from "express";
import userRoutes from "../../../../modules/user/infrastructure/http/routes/userRoutes";

const v1 = Router();

v1.use("/api/v1", userRoutes);

export default v1;