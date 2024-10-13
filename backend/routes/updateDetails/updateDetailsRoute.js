const router = require('express').Router();
const Account = require('../../models/account');
const Student = require("../../models/student");

router.post('/', async (req, res) => {
    try {
        console.log("Update Details");
        const {email, dateOfEntry, apartmentNumber, roommates, distanceFromCampus} = req.body;
        console.log("Email: " + email);
        const existingAccount = await Account.findOne({email});
        if (!existingAccount) {
            return res.status(400).send({error: 'Account does not exist'});
        }
        const updatedAccount = await Student.findOneAndUpdate
        ({
                email: email
            },
            {
                dateOfEntry: dateOfEntry,
                apartmentNumber: apartmentNumber,
                roommates: roommates,
                distanceFromCampus: distanceFromCampus
            });
        return res.status(200).send({
            email: updatedAccount.email,
            firstName: updatedAccount.firstName,
            lastName: updatedAccount.lastName,
            phone: updatedAccount.phone
        });
    } catch (error) {
        return res.status(500).send({error: error.message});
    }
});

module.exports = router;
