// Hamburger menu selections
const hamburger = document.querySelector(".hamburger"); // Fixed selector
const navMenu = document.querySelector("ul");
const navLinks = document.querySelectorAll(".nav-link"); // Changed from ID to class

// Scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

// Hamburger menu functionality
if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Close menu on nav menu clicks
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Scroll to top functionality
if (scrollUp) {
  scrollUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Theme switcher functionality
const checkbox = document.querySelector("#checkbox");
if (checkbox) {
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
}
