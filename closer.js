// JavaScript to toggle the "closer" class on button click
const toggleSidebar = document.getElementById("toggleSidebar");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");

toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("closer");
  content.classList.toggle("closer");
});