const multer = require('multer');
const path = require('path');
const { v4: uuid } = require('uuid');

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        const destinationPath = path
            .join(__dirname, '..', '..', 'public', 'images', 'products');

        callback(null, destinationPath);
    },
    filename: (request, file, callback) => {
        const fileName = `${uuid()}-${file.originalname}`;

        callback(null, fileName);
    }
});


module.exports = storage;