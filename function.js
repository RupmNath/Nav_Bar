// Storing html elements into constant variables with the help of assigned classes
const vegburger = document.querySelector(".burger");
const menu = document.querySelector(".nav_menu");

// Adding a 'click' event to 'vegburger' element
vegburger.addEventListener("click", () => {
    vegburger.classList.toggle("active");
    menu.classList.toggle("active");
});

// Remove active class when clicking any of the links
document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    vegburger.classList.remove("active");
    menu.classList.remove("active");
}));
