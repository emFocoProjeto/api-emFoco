const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = path.basename(file.originalname, ext) + '-' + Date.now() + ext;
    cb(null, filename); 
  },
});

const upload = multer({ storage: storage });

module.exports = upload;