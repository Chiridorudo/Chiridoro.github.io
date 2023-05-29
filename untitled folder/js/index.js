import { data } from "../data/product.js"
import { setItemInLocal } from "./utils.js"
const conatinerCart = document.getElementById("container--cart")

let arrayCart = ""
data.forEach((element) => {
  let html = `
  <main>
        <img
          class="headset"
          src=${element.srcImg}
          alt="headphones set with pink color"
        />

        <div id="cart-text">
          <button class="free-shipping">${element.tag}</button>
          <h2>${element.title}</h2>
          <h1>${element.mainCost}đ</h1>
          <h1>${element.discount !== 1 ? `<span>sale ${element.mainCost * element.discount}đ</span>` : ""}</h1>
          <h4>${element.note}</h4>
          <button class="add-to-cart" data-id=${element.id}>Add to Cart</button>
          <h3 class="stock">
            <i class="fa-solid fa-circle"></i> 50+ pcs. in stock.
          </h3>

          <div id="buttons">
            <button class="add-to-cart-2">
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart
            </button>
            <button class="add-to-wishlist">
              <i class="fa-solid fa-heart"></i> Add to wishlist
            </button>
          </div>
        </div>
      </main>
  `
  arrayCart += html
})
conatinerCart.innerHTML = arrayCart

let btns = document.querySelectorAll(".add-to-cart")

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i]
  btn.addEventListener("click", add)
}

function add(event) {
  let id = event.target.dataset.id
  let item = data.filter((element) => {
    if (element.id === Number(id)) {
      return element
    }
  })
  setItemInLocal('products', item[0])
}

let checkoutbtn = document.getElementById("checkout")
console.log('checkoutbtn', checkoutbtn)
checkoutbtn.addEventListener("click", redirect)

function redirect() {
  let products = getItemInLocal("products")
  if (products.length > 0) {
    window.location.href = "../html/checkout.html"
  }
}