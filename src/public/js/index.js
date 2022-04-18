// search
const search = document.querySelector("#header-search");
// console.log([search]);
const searchbox = document.querySelector(".header-search-box");
// cart
const cart = document.querySelector("#header-cart");
const cartbox = document.querySelector(".header-cart-box");
// snow
const snow = document.querySelector("#header-snow");
const addsnow = document.querySelector("#app");
// firework
const firework = document.querySelector("#header-firework");
const addfirework = document.querySelector("#app");
snow.onclick = () => {
  addsnow.classList.toggle("snow");
  addsnow.classList.remove("firework");
};
firework.onclick = () => {
  addfirework.classList.toggle("firework");
  addfirework.classList.remove("snow");
  console.log("1234");
};
// firework
//offsetwith
// const searchWidth = search.offsetWidth;
// console.log(searchWidth);
// const offsetSearch = (document.querySelector(".header-search-box .active").style.width =
//   searchWidth + "px");

//

// search-header
search.addEventListener("click", function (e) {
  searchbox.classList.toggle("active");
  cartbox.classList.remove("active");
  userform.classList.remove("active");
});

//cart-header
cart.addEventListener("click", () => {
  cartbox.classList.toggle("active");
  userform.classList.remove("active");
  searchbox.classList.remove("active");
});

// user
const users = document.querySelector("#header-user");
const userform = document.querySelector(".header-user-box");

users.addEventListener("click", function (e) {
  searchbox.classList.remove("active");
  cartbox.classList.remove("active");
  userform.classList.toggle("active");
});

// click header-bar

const headerBar = document.querySelector("#header-bar");

headerBar.addEventListener("click", () => {
  console.log("da click header-bar");
  const menu = document.querySelector(".menu");
  console.log(menu);
  menu.classList.toggle("active");
  if (menu.classList.contains) {
    console.log("true");
  }
});

//Collection
const collbtnactives = document.querySelectorAll(".btn-white");
collbtnactives.forEach((collbtnactive) => {
  collbtnactive.addEventListener("click", () => {
    removerClass();
    collbtnactive.classList.add("active");
  });
});
function removerClass() {
  collbtnactives.forEach((collbtnactive) => {
    collbtnactive.classList.remove("active");
  });
}

// page

const pages = document.querySelectorAll(".page-item");
console.log(pages);

pages.forEach((page) => {
  page.addEventListener("click", () => {
    removePageActive();
    page.classList.add("active");
  });
});

function removePageActive() {
  pages.forEach((page) => {
    page.classList.remove("active");
  });
}

// stick-slider

const $jq = jQuery.noConflict();
$jq(document).ready(function () {
  $jq(".image-slider").slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,

    arrows: false,
  });
});

$jq(document).ready(function () {
  $jq(".image-carousel").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
