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

  productList.innerHTML = "";

  data.forEach((item) => {
    productList.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card h-100 shadow">

                <img src="${item.thumbnail}"
                    class="card-img-top"
                    style="height:220px;object-fit:cover;">

                <div class="card-body d-flex flex-column">

                    <small class="text-secondary">${item.brand}</small>

                    <h5>${item.title}</h5>

                    <p>⭐ ${item.rating}</p>

                    <h4 class="text-success">₹${item.price}</h4>

                    <button class="btn btn-success mt-auto"
                        onclick="addToCart(${item.id})">

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>
        `;
  });
}

function addToCart(id) {
  let product = products.find((item) => item.id === id);

  let exist = cart.find((item) => item.id === id);

  if (exist) {
    exist.qty++;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      price: product.price,
      qty: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").innerHTML = cart.length;
}

function showCart() {
  let cartBody = document.getElementById("cart-body");

  let total = 0;

  cartBody.innerHTML = "";

  if (cart.length === 0) {
    cartBody.innerHTML = `
        <tr>
            <td colspan="6" class="text-center text-danger">
                Cart is Empty
            </td>
        </tr>
        `;

    document.getElementById("grand-total").innerHTML = "₹0.00";

    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartBody.innerHTML += `
        <tr>

            <td>${index + 1}</td>

            <td>
                <img src="${item.thumbnail}" width="60">
            </td>

            <td>${item.title}</td>

            <td>

                <button class="btn btn-danger btn-sm"
                    onclick="decreaseQty(${item.id})">
                    -
                </button>

                <span class="mx-2 fw-bold">
                    ${item.qty}
                </span>

                <button class="btn btn-success btn-sm"
                    onclick="increaseQty(${item.id})">
                    +
                </button>

            </td>

            <td>
                ₹${(item.price * item.qty).toFixed(2)}
            </td>

              <td>

               <button class="btn btn-danger btn-sm"
                  type="button"
                  onclick="removeCart(${item.id})">
                  Remove
                </button>

              </td>

        </tr>
        `;

  });

  document.getElementById("grand-total").innerHTML = "₹" + total.toFixed(2);
}

function increaseQty(id) {
  let product = cart.find((item) => item.id == id);

  if (product) {
    product.qty++;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  showCart();
}

function decreaseQty(id) {
  let product = cart.find((item) => item.id == id);

  if (!product) return;

  if (product.qty > 1) {
    product.qty--;
  } else {
    removeCart(id);
    return;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  showCart();
}

function removeCart(id) {

    cart = cart.filter(item => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    if (cart.length === 0) {

        const modal = bootstrap.Modal.getOrCreateInstance(
            document.getElementById("cartModal")
        );

        modal.hide();

        return;
    }

    showCart();
}


function checkout() {

    if (cart.length === 0) {
        alert("Cart is Empty");
        return;
    }

    alert("Order Placed Successfully 🎉");

 
    cart = [];

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    showCart();

    const modalElement = document.getElementById("cartModal");
    const modal = bootstrap.Modal.getInstance(modalElement);

    modal.hide();
}

loadProducts();
updateCartCount();
