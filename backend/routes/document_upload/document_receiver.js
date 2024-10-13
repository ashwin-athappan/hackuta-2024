const router = require('express').Router();
const Busboy = require('busboy');
const fs = require('fs');

router.post("/passport", (req, res) => {
    const busboy = new Busboy({ headers: req.headers });
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        // Process the file stream
        file.pipe(fs.createWriteStream('../../files/passports/' + filename));
    });

    busboy.on('finish', () => {
        res.send('File uploaded successfully!');
    });

    req.pipe(busboy);
});

module.exports = router;