const router = require('express').Router();
const Account = require('../../models/account');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
    try {
        console.log("Register Account");
        const {email, password, role,} = req.body;
        const existingAccount = await Account.findOne({email});
        if (existingAccount) {
            return res.status(400).send({error: 'Account already exists'});
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const account = new Account({email, password: encryptedPassword, role});
        await account.save();
        return res.status(201).send({email: account.email});
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
});

module.exports = router;