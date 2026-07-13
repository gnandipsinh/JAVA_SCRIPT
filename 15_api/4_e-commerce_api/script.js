let products = [];

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

  productList.style.display = "flex";

  data.forEach((item) => {
    productList.innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">

            <div class="card h-100 shadow">

                <img
                    src="${item.thumbnail}"
                    class="card-img-top"
                    style="height:220px; object-fit:cover;">

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
                        class="btn btn-success mt-auto"
                        onclick="buyNow(${item.id})">

                        Buy Now

                    </button>

                </div>

            </div>

        </div>
        `;
  });
}



function sortProducts(type) {
  let data = [...products];

  if (type === "low") {
    data.sort((a, b) => a.price - b.price);
  }

  if (type === "high") {
    data.sort((a, b) => b.price - a.price);
  }

  displayProducts(data);
}

function filterCategory(category) {
  if (category === "all") {
    displayProducts(products);
    return;
  }

  const filtered = products.filter(
    (item) => item.category === category
  );

  displayProducts(filtered);
}

function viewProduct(id) {
  const product = products.find((item) => item.id == id);

  if (!product) return;

  alert(`
Product : ${product.title}

Price : ₹${product.price}

Brand : ${product.brand}

Category : ${product.category}

Rating : ⭐ ${product.rating}
  `);
}

function showHome() {
  loadProducts();
}

loadProducts();