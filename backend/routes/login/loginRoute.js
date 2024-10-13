const router = require('express').Router();
const {getDB} = require('../../db/connectDB');

router.post('/', async (req, res) => {
    try {
        console.log("Login Account");
        const {email, password} = req.body;
        const db = await getDB();
        db.auth(email, password);
        return res.status(200).send({email});
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
});

module.exports = router;