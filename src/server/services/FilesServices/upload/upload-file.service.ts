import { UseCase } from "../../../../app/base/useCase.base";
import { FilesGatewayInterface } from "../../../gateways/FilesGateways/FilesGatewayInterface";
import { File } from "../../../modules/File";
import { UploadFileDTO } from "./upload-file.dto";

export class UploadFileUseCase 
implements UseCase<void> {
    constructor(private readonly filesRepository: FilesGatewayInterface){}
    async perform(param: UploadFileDTO): Promise<void> {
        const file = new File(param)
        await this.filesRepository.save(file)
    }
}