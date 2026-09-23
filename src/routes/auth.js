const express = require("express");
const authRouter = express.Router();

const { validateSignupUpdate } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");

authRouter.post("/signup", async (req, res) => {
    try {
        //validation of data
        validateSignupUpdate(req);
        //encrypt password
        const { firstName, lastName, emailId, password } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);
        const user = new User({
            firstName,
            lastName,
            emailId,
            password: passwordHash,
        });

        await user.save();

        res.send("User added successfully");
    } catch (err) {
        res.status(500).send("Error adding user: " + err.message);
    }
});

authRouter.post("/login", async (req, res) => {
    try {
        const { emailId, password } = req.body;
        console.log(password);
        const user = await User.findOne({ emailId: emailId });
        if (!user) {
            throw new Error("Invalid credential");
        }
        const isPasswordValid = await user.validatePassword(password);
        if (isPasswordValid) {
            // create a jwt token

            const token = await user.getJWT();
            // addd  the token to cookies and send the response back user
            res.cookie("token", token);
            res.send("Login Successfully!");
        } else {
            throw new Error("Invalid credential");
        }
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});

authRouter.post("/logout", async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({
            success: true,
            message: "Logout successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Logout failed",
            error: err.message,
        });
    }
});
module.exports = authRouter;
