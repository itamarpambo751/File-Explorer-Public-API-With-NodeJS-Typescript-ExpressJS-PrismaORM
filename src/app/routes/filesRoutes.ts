import { Request, Response, Router } from "express";
import { storage } from "../../configs/multer"
import multer from "multer";
import { ulpoadFileController } from "../../server/services/FilesServices/upload";

const filesRoutes = Router()

filesRoutes.post("/file/:user_id/:reason_id", multer({ storage }).single("file"), 
    (request: Request, response: Response) => {
    console.log(request.params);
    console.log(request.file);
    return ulpoadFileController.handle(request, response) 
})

export { filesRoutes } 