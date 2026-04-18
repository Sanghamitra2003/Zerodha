require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const app = express();
const { MONGO_URL, PORT } = process.env;

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// 🛠️ FIX 1: Explicitly allow both domains
app.use(
    cors({
        origin: [
            "https://zerodha-web.vercel.app",
            "https://zerodha-admin.vercel.app",
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    }),
);

app.get("/", (req, res) => {
    res.send("Zerodha Backend is Live and Running!");
});

// 🛠️ FIX 2: Isse hata diya kyunki ab hum AuthRoute wala Verify use karenge
// jo body se token uthata hai.
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
        app.listen(PORT || 3002, () => console.log("Server Running"));
    })
    .catch((err) => console.log(err));
