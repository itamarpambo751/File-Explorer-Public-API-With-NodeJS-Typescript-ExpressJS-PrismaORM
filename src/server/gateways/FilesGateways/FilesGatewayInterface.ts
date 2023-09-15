import { GatewayInterface } from "../../../app/base/gatewayInterface.base";
import { File } from "../../modules/File";

export abstract class FilesGatewayInterface extends GatewayInterface<File> {
    abstract getByUserId(id: string): Promise<File[]>
}