const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists", success: false });
        }
        const user = await User.create({
            email,
            password,
            username,
            createdAt,
        });
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.TOKEN_KEY,
            { expiresIn: 3 * 24 * 60 * 60 },
        );

        res.cookie("token", token, {
            httpOnly: false,
            secure: true,
            sameSite: "none",
        });

        res.status(201).json({
            message: "User signed in successfully",
            success: true,
            token: token,
            user: user.username,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({
                message: "Incorrect password or email",
                success: false,
            });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.json({
                message: "Incorrect password or email",
                success: false,
            });
        }
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.TOKEN_KEY,
            { expiresIn: 3 * 24 * 60 * 60 },
        );

        res.cookie("token", token, {
            httpOnly: false,
            secure: true,
            sameSite: "none",
        });

        res.status(200).json({
            message: "User logged in successfully",
            success: true,
            token: token,
            user: user.username,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
