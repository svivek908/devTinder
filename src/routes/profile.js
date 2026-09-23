const express = require("express");
const profileRouter = express.Router();

const { userAuth } = require("../middlewares/auth");

profileRouter.get("/profile", userAuth, async (req, res) => {
    try {
        const user = req.user;

        res.status(200).json({
            success: true,
            message: "Profile fetched successfully",
            data: user,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error fetching profile",
            error: err.message,
        });
    }
});

module.exports = profileRouter;
