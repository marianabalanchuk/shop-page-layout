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

function showModalByScroll() {
  if (window.scrollY > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  })
);

$(".slider").slick({
  dots: true,
});

let decrementButton = document.querySelectorAll(".decrement-btn");
let incrementButton = document.querySelectorAll(".increment-btn");
let productsCounter = document.querySelectorAll(".product-quantity input");

console.log(decrementButton);

function Counter(incrementButton, decrementButton, inputField) {
  this.domRefs = {
    incrementButton,
    decrementButton,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementButton.disabled = count <= 1;
    this.domRefs.incrementButton.disabled = count >= 10;
  };

  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.decrementButton.addEventListener(
    "click",
    this.decrement.bind(this)
  );

  this.domRefs.incrementButton.addEventListener(
    "click",
    this.increment.bind(this)
  );
}

const counter1 = new Counter(incrementButton, decrementButton, productsCounter);
console.log(counter1);
