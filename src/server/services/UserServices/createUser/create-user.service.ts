import { UseCase } from "../../../../app/base/useCase.base";
import { UserGatewayInterface } from "../../../gateways/UserGateways/UserGatewayInterface";
import { User } from "../../../modules/User";
import { AppError } from "../../../typeErrors/AppError";
import { CreateUserDTO } from "./create-user.dto";
import { StatusCodes } from "http-status-codes"

export class CreateUserUseCase 
implements UseCase<AppError> {
    constructor(private readonly userGatewayInterface: UserGatewayInterface) {}
    async perform(user: CreateUserDTO): Promise<any> {
        const mapped = new User(user)
        
        if (await this.userGatewayInterface.getByEmail(mapped.email))
            return new AppError("Usuário já existe.", StatusCodes.CONFLICT)
        
        await this.userGatewayInterface.save(mapped)
    }
}