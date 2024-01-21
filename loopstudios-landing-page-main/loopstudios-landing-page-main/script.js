// Get the hamburger button element
const hamburgerButton = document.querySelector(".hamburger");

// Add a click event listener to the hamburger button
hamburgerButton.addEventListener("click", function () {
  // Get the HTML tag
  const htmlTag = document.querySelector("html");

  // Toggle the 'hamburger-open' class on the HTML tag
  htmlTag.classList.toggle("hamburger-open");

  // Get the hamburger menu element
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // Toggle the 'hamburger-menu' class on the HTML tag
  hamburgerMenu.classList.toggle("hamburger-menu");
});

// Get the HTML tag
const htmlTag = document.querySelector("html");

// Get all the list items in the .nav-links class
const navLinks = document.querySelectorAll(".nav-links li");

// Add a click event listener to each list item
navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    // Remove the 'hamburger-open' class from the HTML tag
    htmlTag.classList.remove("hamburger-open");
  });
});
