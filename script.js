const navbarToggle = document.getElementById("navbar-toggle");
const navbarLinks = document.querySelector(".navbar-links");

navbarToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

// Smooth scroll effect for the CTA button
document.querySelector(".cta-btn").addEventListener("click", function(event) {
  event.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
  });
});




document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting immediately
  
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const messageStatus = document.getElementById("messageStatus");
  
  // Simple client-side validation
  if (!name || !email || !message) {
      messageStatus.classList.remove("success");
      messageStatus.classList.add("error");
      messageStatus.textContent = "Please fill out all fields!";
      messageStatus.style.display = "block";
      return; // Stop form submission if validation fails
  }

  // Email validation using regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
      messageStatus.classList.remove("success");
      messageStatus.classList.add("error");
      messageStatus.textContent = "Please enter a valid email address!";
      messageStatus.style.display = "block";
      return; // Stop form submission if email is invalid
  }

  // Simulate form submission (e.g., using AJAX or contacting a server)
  setTimeout(() => {
      messageStatus.classList.remove("error");
      messageStatus.classList.add("success");
      messageStatus.textContent = "Message sent successfully! Thank you for contacting me.";
      messageStatus.style.display = "block";

      // Reset the form fields
      document.getElementById("contactForm").reset();
  }, 1000);
});
