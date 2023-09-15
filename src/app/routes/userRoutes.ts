import { Request, Response, Router } from "express";
import { createUserController, createUserMiddleware } from "../../server/services/UserServices/createUser";

const userRoutes = Router()

userRoutes.post('/user',
createUserMiddleware,
(request: Request, response: Response) => {
    return createUserController.handle(request, response)
})


export { userRoutes }