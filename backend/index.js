require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const app = express();
const { MONGO_URL, PORT, TOKEN_KEY } = process.env;

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: ["https://zerodha-web.vercel.app"], // Yahan apna Vercel link hi daalna
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    }),
);

app.get("/", (req, res) => {
    res.send("Zerodha Backend is Live and Running!");
});

app.post("/verify", (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ status: false });
    }
    jwt.verify(token, TOKEN_KEY, (err, data) => {
        if (err) {
            return res.json({ status: false });
        } else {
            return res.json({ status: true, user: data.username });
        }
    });
});

app.use("/", authRoute);

app.get("/allHoldings", async (req, res) => {
    try {
        let allHoldings = await HoldingsModel.find({});
        res.status(200).json(allHoldings);
    } catch (err) {
        res.status(500).send("Error fetching holdings");
    }
});

app.get("/allPositions", async (req, res) => {
    try {
        let allPositions = await PositionsModel.find({});
        res.status(200).json(allPositions);
    } catch (err) {
        res.status(500).send("Error fetching positions");
    }
});

app.post("/newOrder", async (req, res) => {
    try {
        const newOrder = new OrdersModel({
            name: req.body.name,
            qty: req.body.qty,
            price: req.body.price,
            mode: req.body.mode,
        });
        await newOrder.save();
        res.status(201).send("Order saved successfully");
    } catch (err) {
        res.status(400).send("Error saving order");
    }
});

mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("db connect");
        app.listen(PORT || 3002, () => {
            console.log(`server running on port ${PORT || 3002}`);
        });
    })
    .catch((err) => {
        console.error("DB Connection Error:", err);
    });
