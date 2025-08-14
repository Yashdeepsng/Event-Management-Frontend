// Form Validation
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const errorMsg = document.getElementById("error-msg");

    if (name === "" || email === "") {
        errorMsg.textContent = "All fields are required!";
    } else {
        errorMsg.textContent = "";
        alert("Registration Successful!");
        this.reset();
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            let valid = true;

            // Validate Name
            const name = document.querySelector("input[type='text']").value.trim();
            if (name === "") {
                alert("Please enter your name.");
                valid = false;
            }

            // Validate Phone
            const phone = document.querySelector("input[type='tel']").value.trim();
            const phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phone)) {
                alert("Please enter a valid 10-digit phone number.");
                valid = false;
            }

            // Validate Email
            const email = document.querySelector("input[type='email']").value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                valid = false;
            }

            // Validate Guests
            const guests = document.querySelector("input[type='number']").value;
            if (guests <= 0) {
                alert("Please enter a valid number of guests.");
                valid = false;
            }

            if (!valid) {
                event.preventDefault(); // Stop form submission if validation fails
            }
        });
    }
});
