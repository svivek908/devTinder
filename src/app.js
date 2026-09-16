const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const { validateSignupUpdate } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.post("/signup", async (req, res) => {
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
app.post("/login", async (req, res) => {
    try {
        const { emailId, password } = req.body;
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
app.get("/profile", userAuth, async (req, res) => {
    try {
        const user = req.user;

        res.send(user);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});
app.get("/user", async (req, res) => {
    try {
        const userEmail = req.body.emailId;

        const user = await User.findOne({ emailId: userEmail });

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send(user);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});
app.get("/feed", async (req, res) => {
    try {
        const user = await User.find({});

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send(user);
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
});
app.delete("/user", async (req, res) => {
    try {
        const userId = req.body.userId;

        const user = await User.findOneAndDelete({ _id: userId });

        if (!user) {
            return res.status(404).send("User not found or already deleted");
        }

        res.send("User deleted successfully");
    } catch (err) {
        res.status(500).send("Error deleting user: " + err.message);
    }
});
app.patch("/user/:userId", async (req, res) => {
    try {
        const userId = req.params?.userId;
        const data = req.body;
        const allowed_update = ["gender", "photoUrl", "age", "skills"];
        const isUpdateAllowed = Object.keys(data).every((k) => allowed_update.includes(k));
        if (!isUpdateAllowed) {
            throw new Error("update not allowed");
        }
        if (data?.skills.length > 10) {
            throw new Error("skills  cannot more 10");
        }

        const user = await User.findByIdAndUpdate({ _id: userId }, data, {
            runValidators: true,
        });

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.send("User upated successfully");
    } catch (err) {
        res.status(500).send("Error deleting user: " + err.message);
    }
});

connectDB()
    .then(() => {
        console.log("Database connection established..");

        app.listen(3000, () => {
            console.log("Server is successfully listening on port 3000");
        });
    })
    .catch((err) => {
        console.log("Database cannot be connected", err);
    });
