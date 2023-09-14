import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { filesRoutes } from "./filesRoutes"

const AppRoutes = Router()

AppRoutes.use(userRoutes)
AppRoutes.use(filesRoutes)

export { AppRoutes }