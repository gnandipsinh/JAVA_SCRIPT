
let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];



async function loadProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=100");

    const data = await response.json();

    products = data.products;

    displayProducts(products);
  } catch (error) {
    console.log(error);
  }
}


function displayProducts(data) {
  const productList = document.getElementById("product-list");

  const cartItems = document.getElementById("cart-items");

  const checkout = document.getElementById("checkout-section");

  productList.style.display = "flex";

  cartItems.style.display = "none";

  checkout.innerHTML = "";

  productList.innerHTML = "";

  data.forEach((item) => {
    productList.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card h-100 shadow">

                <img
                    src="${item.thumbnail}"
                    class="card-img-top"
                    style="height:220px;object-fit:cover;">

                <div class="card-body d-flex flex-column">

                    <small class="text-secondary">
                        ${item.brand}
                    </small>

                    <h5>
                        ${item.title}
                    </h5>

                    <p>

                        ⭐ ${item.rating}

                    </p>

                    <h4 class="text-success">

                        ₹${item.price}

                    </h4>

                    <button
                        class="btn btn-warning w-100"

                        onclick="addToCart(${item.id})">

                        Add To Cart

                    </button>

                    <button
                        class="btn btn-success w-100 mt-2"

                        onclick="buyNow(${item.id})">

                        Buy Now

                    </button>

                </div>

            </div>

        </div>

        `;
  });
}



function addToCart(id) {
  const product = products.find((item) => item.id == id);

  const existing = cart.find((item) => item.id == id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      ...product,

      qty: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert("Added Successfully");
}



function updateCartCount() {
  let total = 0;

  cart.forEach((item) => {
    total += item.qty;
  });

  document.getElementById("cart-count").innerText = total;
}


function showCart() {
  document.getElementById("product-list").style.display = "none";

  const cartItems = document.getElementById("cart-items");
  const checkout = document.getElementById("checkout-section");

  cartItems.style.display = "flex";
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    checkout.innerHTML = "";

    cartItems.innerHTML = `
            <div class="col-12 text-center">
                <h2>Cart Is Empty</h2>
            </div>
        `;

    return;
  }

  let grandTotal = 0;

  cart.forEach((item) => {
    grandTotal += item.price * item.qty;

    cartItems.innerHTML += `

        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card h-100 shadow">

                <img src="${item.thumbnail}"
                class="card-img-top"
                style="height:220px;object-fit:cover;">

                <div class="card-body">

                    <h5>${item.title}</h5>

                    <h4 class="text-success">
                        ₹${item.price}
                    </h4>

                    <p>
                        Quantity : ${item.qty}
                    </p>

                    <p>
                        Total : ₹${item.price * item.qty}
                    </p>

                    <div class="d-flex gap-2">

                        <button
                        class="btn btn-success w-50"
                        onclick="increaseQty(${item.id})">

                        +

                        </button>

                        <button
                        class="btn btn-danger w-50"
                        onclick="decreaseQty(${item.id})">

                        -

                        </button>

                    </div>

                </div>

            </div>

        </div>

        `;
  });

  checkout.innerHTML = `

    <div class="card shadow p-4">

        <h3>
            Grand Total : ₹${grandTotal}
        </h3>

        <button
        class="btn btn-success mt-3"
        onclick="checkout()">

        Proceed To Checkout

        </button>

    </div>

    `;
}

function increaseQty(id) {
  const product = cart.find((item) => item.id == id);

  if (product) {
    product.qty++;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  showCart();
}





updateCartCount();

loadProducts();
