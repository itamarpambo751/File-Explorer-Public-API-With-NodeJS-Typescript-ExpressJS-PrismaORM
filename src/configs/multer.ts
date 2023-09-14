const multer = require('multer');
const path = require('path');

export const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, 'tmp/archives/')
  },
  filename: (req: any, file: any, cb: any) => {
    const ext = path.extname(file.originalname)
    cb(null, Date.now() + ext)
  }
})