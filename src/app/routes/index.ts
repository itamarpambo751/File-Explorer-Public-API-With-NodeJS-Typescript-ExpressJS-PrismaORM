import { Request, Response, Router } from "express";
import multer from "multer";

const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'tmp/archives/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const routes = Router()

routes.post("/file", multer({storage}).single("file"), 
    (request: Request, response: Response) => {
    console.log(request.file);
})

export { routes }