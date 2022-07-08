const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage(
  {
    destination: (request, file, callback) => {
      const destinationPath = path.join(__dirname,'..', '..', 'public', 'images', 'products'); 
      callback(null, destinationPath);
    },
    filename: (request, file, callback) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      callback(null, fileName);
    }
  }
);