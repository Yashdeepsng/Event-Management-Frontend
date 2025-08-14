let events = [
    {
        id: "event1",
        title: "Music Concert",
        date: "2025-06-10",
        location: "New York City",
        image: "event1.jpg",
        description: "A live music concert featuring top artists from around the world."
    },
    {
        id: "event2",
        title: "Tech Conference",
        date: "2025-07-15",
        location: "San Francisco",
        image: "event2.jpg",
        description: "A conference bringing together technology enthusiasts and industry leaders."
    }
];

let selectedEventId = null;

// Load events
function loadEvents() {
    const eventContainer = document.getElementById("eventContainer");
    eventContainer.innerHTML = "";

    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.onclick = () => showEventDetails(event.id);

        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <button onclick="event.stopPropagation(); bookEvent('${event.id}')">Book Now</button>
        `;

        eventContainer.appendChild(eventCard);
    });
}

// Show event details
function showEventDetails(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        selectedEventId = eventId;
        document.getElementById("eventTitle").textContent = event.title;
        document.getElementById("eventDate").textContent = "Date: " + event.date;
        document.getElementById("eventLocation").textContent = "Location: " + event.location;
        document.getElementById("eventDescription").textContent = event.description;
        document.getElementById("eventDetailsModal").style.display = "block";
    }
}

// Close modal
function closeModal() {
    document.getElementById("eventDetailsModal").style.display = "none";
}

// Book an event (Store in local storage)
function bookEvent() {
    if (!selectedEventId) return;

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    const event = events.find(e => e.id === selectedEventId);

    if (!event) return;

    bookings.push(event);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    document.getElementById("bookingMessage").textContent = "Booking Confirmed!";
    document.getElementById("bookingMessage").style.display = "block";
    
    loadBookings();
}

// Load bookings from local storage
function loadBookings() {
    const bookingsList = document.getElementById("bookingsList");
    bookingsList.innerHTML = "";

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookings.forEach((booking, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${booking.title} - ${booking.date} (${booking.location})`;
        
        let removeButton = document.createElement("button");
        removeButton.textContent = "Cancel";
        removeButton.onclick = () => cancelBooking(index);
        
        listItem.appendChild(removeButton);
        bookingsList.appendChild(listItem);
    });
}

// Cancel a booking
function cancelBooking(index) {
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    loadBookings();
}

// Add a new event
document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newEvent = {
        id: "event" + (events.length + 1),
        title: document.getElementById("eventTitleInput").value,
        date: document.getElementById("eventDateInput").value,
        location: document.getElementById("eventLocationInput").value,
        image: document.getElementById("eventImageInput").value || "default.jpg",
        description: document.getElementById("eventDescriptionInput").value
    };

    events.push(newEvent);
    loadEvents();
    this.reset();
});

// Load events and bookings on page load
window.onload = () => {
    loadEvents();
    loadBookings();
};
