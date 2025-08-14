const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: String,
    date: Date,
    location: String,
    description: String,
    price: Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
