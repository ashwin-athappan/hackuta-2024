const router = require('express').Router();
const Account = require('../../models/account');
const bcrypt = require('bcryptjs');
const Student = require("../../models/student");

router.post('/', async (req, res) => {
    try {
        console.log("Register Account");
        const {firstName, lastName, email, password, role, phone} = req.body;
        const existingAccount = await Account.findOne({email});
        if (existingAccount) {
            return res.status(400).send({error: 'Account already exists'});
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const account = new Account({email, password: encryptedPassword, role});
        const createdAccount = await account.save();
        if (role === 'student') {
            const student = new Student({accountId: createdAccount._id, email, phone, firstName, lastName});
            await student.save();
        }
        return res.status(201).send({email: account.email});
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
});

module.exports = router;