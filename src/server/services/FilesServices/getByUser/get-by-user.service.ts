
import { UseCase } from "../../../../app/base/useCase.base"
import { FilesGatewayInterface } from "../../../gateways/FilesGateways/FilesGatewayInterface"
import { UserGatewayInterface } from "../../../gateways/UserGateways/UserGatewayInterface"
import { GetFilesByUserDTO } from "./get-by-user.dto"
import { AppError } from "../../../typeErrors/AppError"
import { StatusCodes } from "http-status-codes"
export class GetFilesByUser 
implements UseCase<any> {
    constructor(
        private readonly filesGatewayInterface: FilesGatewayInterface,
        private readonly userGatewayInterface: UserGatewayInterface
    ){}
    async perform({ id }: GetFilesByUserDTO): Promise<any> {
        const userExists = await this.userGatewayInterface.get(id)

        if (!userExists) return new AppError("Usuário não encontrado.", StatusCodes.NOT_FOUND)

        return await this.filesGatewayInterface.getByUserId(id)
    }
}