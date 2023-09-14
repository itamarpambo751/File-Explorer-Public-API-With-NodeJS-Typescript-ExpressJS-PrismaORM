const multer = require('multer');
const path = require('path');

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'tmp/files/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});