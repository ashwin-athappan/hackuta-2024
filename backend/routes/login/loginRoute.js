const router = require('express').Router();
const {getDB} = require('../../db/connectDB');
const Account = require('../../models/account');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
    try {
        console.log("Login Account");
        const {email, password} = req.body;
        const user = await Account.findOne({email});
        if (!user) {
            return res.status(400).send({error: 'User not found'});
        }
        if (user.password !== password) {
            return res.status(400).send({error: 'Invalid password'});
        }
        return res.status(200).send({email: user.email, role: user.role});
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
});

module.exports = router;