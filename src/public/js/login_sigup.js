const sigup = document.querySelector(".sigup");
const sigupcontent = document.querySelector(".contentsigupbx");

const login = document.querySelector(".login");
const logincontent = document.querySelector(".contentbx");

sigup.addEventListener("click", () => {
  logincontent.style.display = "none";
  sigupcontent.style.display = "flex";
});
login.addEventListener("click", () => {
  console.log("1234");
  logincontent.style.display = "flex";
  sigupcontent.style.display = "none";
});

const bar = $("#header-bar");
const menu = document.querySelector(".menu");
bar.click(() => {
  menu.classList.toggle("active");
});
