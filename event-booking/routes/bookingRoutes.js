const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a new booking
router.post('/book-event', async (req, res) => {
    try {
        const { userName, userEmail, eventId, eventName, seatsBooked } = req.body;

        // Validate required fields
        if (!userName || !userEmail || !eventId || !eventName || !seatsBooked) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new booking
        const newBooking = new Booking({ userName, userEmail, eventId, eventName, seatsBooked });

        // Save to MongoDB
        await newBooking.save();

        res.status(201).json({ message: 'Booking successful', booking: newBooking });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
