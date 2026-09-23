const express = require("express");

const requestRouter = express.Router();

requestRouter.get("/user", async (req, res) => {
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

module.exports = requestRouter;
