let navbar = document.querySelector(".navbar");

document.getElementById("menu-btn").addEventListener("click", () => {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
});

let cartItem = document.querySelector(".cart-items-center");

document.getElementById("cart-btn").addEventListener("click", () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
});

let searchForm = document.querySelector(".search-form");

document.getElementById("search-btn").addEventListener("click", () => {
  searchForm.classList.toggle("active");
  cartItem.classList.remove("active");
  navbar.classList.remove("active");
});

window.onscroll = () => {
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
  navbar.classList.remove("active");
};
