import { Request, Response } from "express";
import { Controller } from "../../../../app/base/controller.base";
import { UploadFileUseCase } from "./upload-file.service";
import { StatusCodes } from "http-status-codes";

export class UploadFileController 
implements Controller {
    constructor(private readonly uploadFileUseCase: UploadFileUseCase){}
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, reason_id } = request.params

        if (request.file)
            try {
                await this.uploadFileUseCase.perform({
                    ...request.file, 
                    user_id ,
                    reason_id
                })
            } catch (error) {
                return response.status(StatusCodes.BAD_REQUEST).json({
                    message: 'Erro 500. Alguma coisa correu mal.'
                })
            }

        return response.status(StatusCodes.CREATED).send()
    }
}