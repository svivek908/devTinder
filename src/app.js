const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        const user = new User({
            firstName: "Vivek",
            lastName: "Sharma",
            emailId: "svivek908@gmail.com",
            age: 30,
            gender: "Male"
        });

        await user.save();

        res.send("User added successfully");
    } catch (err) {
        res.status(500).send("Error adding user: " + err.message);
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