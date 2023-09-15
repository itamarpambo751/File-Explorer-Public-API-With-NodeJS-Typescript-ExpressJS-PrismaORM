import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { filesRoutes } from "./filesRoutes"
import { router } from "./router";

const AppRoutes = Router()

AppRoutes.use(userRoutes)
AppRoutes.use(filesRoutes)
AppRoutes.use(router)

export { AppRoutes }