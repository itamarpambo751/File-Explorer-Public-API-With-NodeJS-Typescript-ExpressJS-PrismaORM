import { Request, Response } from "express";
import { Controller } from "../../../../app/base/controller.base";
import { CreateUserUseCase } from "./create-user.service";
import { AppError } from "../../../typeErrors/AppError";
import { StatusCodes } from "http-status-codes";

export class CreateUserController 
implements Controller {
    constructor (private readonly createUserUseCase: CreateUserUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const perform = await this.createUserUseCase.perform(request.body)

        if (perform instanceof AppError) 
            return response.status(perform.statusCode).json(perform)
        return response.status(StatusCodes.CREATED).send()
    }
}