let productsCountEl = document.querySelector("#cart-counter");
let addToCartBtns = document.querySelectorAll(".add-cart-btn");

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".details-btn");
moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

let modalClose = document.querySelector(".btn-close");
modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

let productsWishList = document.querySelectorAll(".add-wishlist");

productsWishList.forEach((item) =>
  item.addEventListener("click", function (event) {
    let imgSrc = item.getAttribute("src");
    if (imgSrc === "images/wishlist-blue.png") {
      item.setAttribute("src", "images/wishlist-white.png");
      item.style.background = "#2c71b8";
    } else {
      item.setAttribute("src", "images/wishlist-blue.png");
      item.style.background = "none";
    }
  })
);
