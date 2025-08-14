require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Import models
const Event = require("./models/Event");
const Booking = require("./models/Booking");


app.get("/test-db", async (req, res) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        res.json({ message: "Database is connected!", collections });
    } catch (error) {
        res.status(500).json({ error: "Database connection failed!" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
const authRoutes = require("./routes/authRoutes");
app.use("api/auth", authRoutes);

const bookingRoutes = require('./routes/bookingRoutes');
app.use('/api/bookings', bookingRoutes);

app.get("/", (req, res) =>
{
    res.send("Backend is working!");
});