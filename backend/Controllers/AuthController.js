const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
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
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201).json({
            message: "User signed in successfully",
            success: true,
            user,
        });
        next();
    } catch (error) {
        console.error(error);
    }
};

module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "Incorrect password or email" });
        }
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.json({ message: "Incorrect password or email" });
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.TOKEN_KEY,
            { expiresIn: 3 * 24 * 60 * 60 },
        );

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(200).json({
            message: "User logged in successfully",
            success: true,
            user,
        });
        next();
    } catch (error) {
        console.error(error);
    }
};
