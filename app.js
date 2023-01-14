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

let decrementButtons = document.querySelectorAll(".decrement-btn");
let incrementButtons = document.querySelectorAll(".increment-btn");
let productsCounters = document.querySelectorAll(".product-counter");

for (let index = 0; index < decrementButtons.length; index++) {
  this.Counter(incrementButtons, decrementButtons, productsCounters, index);
}

function Counter(incrementButtons, decrementButtons, inputFields, index) {
  this.domRefs = {
    incrementButtons,
    decrementButtons,
    inputFields,
  };

  this.toggleButtonState = function (index) {
    let count = this.domRefs.inputFields[index].value;
    this.domRefs.decrementButtons[index].disabled = count <= 1;
    this.domRefs.incrementButtons[index].disabled = count >= 10;
  };

  this.toggleButtonState(index);

  this.increment = function () {
    this.domRefs.inputFields[index].value =
      +this.domRefs.inputFields[index].value + 1;
    this.toggleButtonState(index);
  };

  this.decrement = function () {
    this.domRefs.inputFields[index].value =
      +this.domRefs.inputFields[index].value - 1;
    this.toggleButtonState(index);
  };

  this.domRefs.decrementButtons[index].addEventListener(
    "click",
    this.decrement.bind(this)
  );

  this.domRefs.incrementButtons[index].addEventListener(
    "click",
    this.increment.bind(this)
  );
}
