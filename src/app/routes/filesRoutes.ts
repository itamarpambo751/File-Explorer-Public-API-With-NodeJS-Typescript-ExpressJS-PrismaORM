import { Request, Response, Router } from "express";
import { storage } from "../../configs/multer"
import multer from "multer";

const filesRoutes = Router()

filesRoutes.post("/file", multer({storage}).single("file"), 
    (request: Request, response: Response) => {
    console.log(request.file);
})

export { filesRoutes } 