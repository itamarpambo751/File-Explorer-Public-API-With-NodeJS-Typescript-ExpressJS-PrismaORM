import { FileGatewayPrisma } from "../../../gateways/FilesGateways/FilesGatewayPrisma";
import { UploadFileController } from "./upload-file.controller";
import uploadFileMiddleware from "./upload-file.middleware";
import { UploadFileUseCase } from "./upload-file.service";

const uploadFileUseCase = new UploadFileUseCase(
    new FileGatewayPrisma
)
const uploadFileController = new UploadFileController(uploadFileUseCase)

export {
    uploadFileController as ulpoadFileController,
    uploadFileMiddleware
}