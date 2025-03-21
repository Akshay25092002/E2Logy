const express = require('express');
const multer = require('multer');
const path = require("path");
const app = express();
const fs = require("fs");

//Ensure directory
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// In-disk storage for files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); //save file in 'uploads' directory (so, create uploads directory first)
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`) //for unique file name
    }
});
//file filtering for IMAGE
const onlyImg = (req, file, cb) => {
    const allowedExtTypes = /jpeg|jpg|png|gif/;
    const fileExtName = allowedExtTypes.test(path.extname(file.originalname).toLowerCase());
    const fileMimeName = allowedExtTypes.test(file.mimetype);

    if (fileExtName && fileMimeName) {
        cb(null, true);
    } else {
        cb(new Error("Here, Only Img file are allowed.(like => jpeg, jpg, png, gif)"));
    }
};

const upload = multer({ storage: storage, fileFilter: onlyImg });

app.post('/upload', upload.single('file'), (req, res) => {
    // File upload logic here
    if (!req.file) {
        return res.status(400).json({ error: "Bad request, Invalid file" });
    }
    res.json({ message: 'File uploaded successfully', fileName: req.file.filename });
});

//middleware for MULTER(error Handling)
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    if (err instanceof multer.MulterError) {
        return res.status(500).json({ error: "Internal Multer error." });
    } else if (err) {
        return res.status(400).json({ error: err.message });
    }
    next();
});

app.listen(3000, () => console.log('Server running on port 3000'));
