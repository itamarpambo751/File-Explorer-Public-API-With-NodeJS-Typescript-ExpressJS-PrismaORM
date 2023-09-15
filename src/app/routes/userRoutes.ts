import { Request, Response, Router } from "express";
import { createUserController, createUserMiddleware } from "../../server/services/UserServices/createUser";

const userRoutes = Router()

userRoutes.post('/user', 
(request: Request, response: Response) => {
    return createUserController.handle(request, response)
})

userRoutes.get('/user', (request, response) => {
    return response.json({
        message: request.query
    })
})

export { userRoutes }