// Navbar Toggle
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  });
});

// Image Slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          window.scrollTo({
              top: targetSection.offsetTop - 50,
              behavior: 'smooth'
          });
      }
  });
});

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate:  0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
    0: {
     slidesPerView: 1,
    },
    700: {
    slidesPerView: 2,
    },
    1050: {
    slidesPerView: 3,
    },       
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  });

  
  //upcoming events
  document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { title: "Music Concert", date: "2025-04-10", category: "music", description: "Live concert in the city." },
        { title: "Tech Conference", date: "2025-04-15", category: "tech", description: "Latest trends in tech." },
        { title: "Football Match", date: "2025-04-20", category: "sports", description: "Exciting football game." }
    ];

    const eventsContainer = document.getElementById("eventsContainer");

    function displayEvents(filteredEvents) {
        eventsContainer.innerHTML = "";
        filteredEvents.forEach((event, index) => {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event");
            eventDiv.innerHTML = `<h3>${event.title}</h3><p>${event.date}</p>`;
            eventDiv.addEventListener("click", () => openModal(event));
            eventsContainer.appendChild(eventDiv);
        });
    }

    function openModal(event) {
        document.getElementById("modalTitle").textContent = event.title;
        document.getElementById("modalDate").textContent = event.date;
        document.getElementById("modalDescription").textContent = event.description;
        document.getElementById("eventModal").style.display = "block";
    }

    document.querySelector(".close").addEventListener("click", () => {
        document.getElementById("eventModal").style.display = "none";
    });

    displayEvents(events);

    // Search Functionality
    document.getElementById("searchInput").addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const filteredEvents = events.filter(event => event.title.toLowerCase().includes(query));
        displayEvents(filteredEvents);
    });

    // Filter by Category
    document.getElementById("categoryFilter").addEventListener("change", function () {
        const category = this.value;
        const filteredEvents = category === "all" ? events : events.filter(event => event.category === category);
        displayEvents(filteredEvents);
    });
});
