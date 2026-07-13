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



updateCartCount();

loadProducts();
