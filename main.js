const btnNavEl = document.querySelector(".mobile-nav-btns");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Update slidesPerView based on screen size
function updateSlidesPerView() {
  if (window.innerWidth < 768) {
    swiper.params.slidesPerView = 1;
  } else {
    swiper.params.slidesPerView = 3;
  }
  swiper.update(); // Update Swiper after changing the configuration
}

// Call the function initially and on window resize
updateSlidesPerView();
window.addEventListener("resize", updateSlidesPerView);

// STICKY NAVIGATION
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scrollPosition = window.pageYOffset;

  if (scrollPosition > 0) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
});

//FORM
var emailForm = document.getElementById("emailForm");
var emailInput = document.getElementById("emailInput");
var errorText = document.getElementById("errorText");

emailForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Check if the email field is empty
  if (emailInput.value.trim() === "") {
    errorText.textContent = "Please enter your email address.";
    errorText.style.display = "block";
    return;
  }

  // Check if the email format is incorrect using a regular expression
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    errorText.textContent = "Please enter a valid email address.";
    errorText.style.display = "block";
    return;
  }

  // Clear the error message if there are no errors
  errorText.textContent = "";
  errorText.style.display = "none";

  // Perform any additional actions or submit the form
});
