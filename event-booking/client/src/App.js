import React, { useEffect, useState } from "react";
import { fetchEvents } from "./api/api";

function App() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents().then(response => setEvents(response.data));
    }, []);

    return (
        <div>
            <h1>Event Booking</h1>
            <ul>
                {events.map(event => (
                    <li key={event._id}>{event.title} - {event.location}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
