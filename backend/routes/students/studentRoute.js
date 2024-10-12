const express = require("express");
const router = express.Router();
const student = require("../../models/students");

// Use jwt authentication for register and login and prevent other activities without authentication

router.post("/register", async (req, res) => {
    // Perform all validations
    const {firstName, lastName, age, email, phone, sevisId, physicalAddress} = req.body;
    // Check if all the data is provided
    if (!firstName || !lastName || !age || !email || !phone || !physicalAddress) {
        return res.status(400).send("All fields are required");
    }

    const student_email = await student.findOne({email});

    if (student_email) {
        return res.status(400).send("Student email already exists");
    }

    const student_phone = await student.findOne({phone});

    if (student_phone) {
        return res.status(400).send("Student phone already exists");
    }

    const newStudent = new student({
        firstName,
        lastName,
        age,
        email,
        phone,
        sevisId,
        physicalAddress,
    });

    const result = await newStudent.save();

    return res.send("Register a student");

});

router.post("/login", (req, res) => {
    res.send("Login a student");
});

router.post("/logout", (req, res) => {
    res.send("Logout a student");
});

router.post("/update", (req, res) => {
    res.send("Update a student");
});

module.exports = router;