const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // File akan disimpan di folder 'uploads'
    },
    filename: function (req, file, cb) {
        // Nama file akan menjadi: timestamp-namaasli.ekstensi
        cb(null, Date.now() + '-' + file.originalname)
    }
});

// Filter file yang diizinkan
const fileFilter = (req, file, cb) => {
    // Izinkan hanya PDF dan DOC/DOCX
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        cb(null, true);
    } else {
        cb(new Error('Hanya file PDF dan Word yang diizinkan!'), false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // Batas ukuran file 5MB
    }
});

module.exports = upload; 