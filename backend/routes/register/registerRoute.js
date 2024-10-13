const router = require('express').Router();
const Account = require('../../models/account');
const Student = require("../../models/student");
const Admin = require("../../models/admin");

router.post('/', async (req, res) => {
    try {
        console.log("Register Account");
        const {firstName, lastName, email, password, role, phone} = req.body;
        const existingAccount = await Account.findOne({email});
        if (existingAccount) {
            return res.status(400).send({error: 'Account already exists'});
        }
        const account = new Account({email, password, role});
        const createdAccount = await account.save();
        if (role === 'student') {
            const student = new Student({accountId: createdAccount._id, email, phone, firstName, lastName});
            await student.save();
        } else if (role === 'admin') {
            console.log("Admin account creation");
            const admin = new Admin({accountId: createdAccount._id, email, phone, firstName, lastName});
            await admin.save();
        }
        return res.status(201).send({email: account.email});
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
});

module.exports = router;