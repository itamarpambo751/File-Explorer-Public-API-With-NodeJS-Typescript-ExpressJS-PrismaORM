import { GatewayInterface } from "../../../app/base/gatewayInterface.base";
import { User } from "../../modules/User";

export abstract class UserGatewayInterface 
extends GatewayInterface<User> {
    abstract getByEmail(email: string): Promise<User | null>
}