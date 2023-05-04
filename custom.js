//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector(".seccion-galletas-grid");
let priceTotal = document.querySelector(".price-total");
let amountProduct = document.querySelector(".count-product");


let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//functions
loadEventListenrs();
function loadEventListenrs() {
  allContainerCart.addEventListener("click", addProduct);

  containerBuyCart.addEventListener("click", deleteProduct);
}

function addProduct(e){
e.preventDefault();
if (e.target.classList.contains("btn")) {
  const selectProduct = e.target.parentElement;
  readTheContent(selectProduct);
}
}

function deleteProduct(e) {
  if (e.target.classList.contains("delete-product")) {
    const deleteId = e.target.getAttribute('data-id');

    buyThings.forEach((value) => {
      if (value.id == deleteId) {
        let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
        totalCard = totalCard - priceReduce;
        totalCard = totalCard.toFixed(2);
      }
    });
    buyThings = buyThings.filter((product) => product.id !== deleteId);

    countProduct--;
  }

  if (buyThings.length === 0) {
    priceTotal.innerHTML = 0;
    amountProduct.innerHTML = 0;
  }
  loadHtml();
}

function readTheContent(product) {
  const infoProduct = {
    image: product.querySelector("div img").src,
    title: product.querySelector(".name").textContent,
    price: product.querySelector(".description").textContent,
    id: product.querySelector("button").getAttribute("data-id"),
    amount: 1,
  };

  totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
  totalCard = totalCard.toFixed(2);

  const exist = buyThings.some((product) => product.id === infoProduct.id);
  if (exist) {
    const pro = buyThings.map((product) => {
      if (product.id === infoProduct.id) {
        product.amount++;
        return product;
      } else {
        return product;
      }
    });
    buyThings = [...pro];
  } else {
    buyThings = [...buyThings, infoProduct];
    countProduct++;
  }
  loadHtml();

}

function loadHtml() {
  clearHtml();
  buyThings.forEach((product) => {
    const { image, title, price, amount, id } = product;
    const row = document.createElement("div");
    row.classList.add("container-galletas");
    row.innerHTML = `
        <img src="${image}" alt="Galleta de Chocolate"
        class="cookie-product">
    <h2 class="name">${title}</h2>
    <p class="description">${price}</p>
    <button id="boton2" data-id="2" class="btn">${id}</button>
        `;

    containerBuyCart.appendChild(row);

    priceTotal.innerHTML = totalCard;

    amountProduct.innerHTML = countProduct;
  });
}
function clearHtml() {
  containerBuyCart.innerHTML = "";
}
