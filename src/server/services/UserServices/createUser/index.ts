import { CreateUserUseCase } from "./create-user.service";
import { UserGatewayPrisma } from "../../../gateways/UserGateways/UserGatewayPrisma"
import { CreateUserController } from "./create-user.controller";
import createUserMiddleware from "./create-user.middleware";

const createUserUseCase = new CreateUserUseCase(
    new UserGatewayPrisma
)
const createUserController = new CreateUserController(
    createUserUseCase
)
export { createUserController, createUserMiddleware }