const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

// Video yuklash marshruti
app.post('/upload', upload.single('video'), (req, res) => {
    if (req.file) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Yuklangan videolarni ko'rsatish marshruti
app.get('/videos', (req, res) => {
    fs.readdir('uploads/', (err, files) => {
        if (err) {
            return res.status(500).json({ success: false });
        }

        const videos = files.map(file => ({
            filename: file,
            url: `/uploads/${file}`
        }));

        res.json({ success: true, videos });
    });
});

// Video o'chirish marshruti
app.delete('/delete/:filename', (req, res) => {
    const filePath = path.join('uploads', req.params.filename);

    fs.unlink(filePath, err => {
        if (err) {
            return res.status(500).json({ success: false });
        }

        res.json({ success: true });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
