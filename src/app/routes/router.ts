import { Request, Response, Router } from "express";
import { createUserController } from "../../server/services/UserServices/createUser";

const router = Router()

.post('/create-user', (request: Request, response: Response) => {
    console.log(request.body);
    
    return createUserController.handle(request, response)
})

export { router }