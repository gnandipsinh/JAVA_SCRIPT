const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    price: 1499,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    actions: {
      buy: "/api/products/1/buy",
      addToCart: "/api/products/1/cart",
    },
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 3999,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&q=80",
    actions: {
      buy: "/api/products/2/buy",
      addToCart: "/api/products/2/cart",
    },
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 899,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    actions: {
      buy: "/api/products/3/buy",
      addToCart: "/api/products/3/cart",
    },
  },
  {
    id: 4,
    name: "USB-C Fast Charger 65W",
    price: 1299,
    currency: "INR",
    image:
      "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/Yarr-65w-gan-3-port-power-adapter-with-type-c-to-type-c-cable-white-Flat-View.png",
    actions: {
      buy: "/api/products/4/buy",
      addToCart: "/api/products/4/cart",
    },
  },
  {
    id: 5,
    name: "Mechanical Gaming Keyboard",
    price: 2499,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&q=80",
    actions: {
      buy: "/api/products/5/buy",
      addToCart: "/api/products/5/cart",
    },
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 599,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    actions: {
      buy: "/api/products/6/buy",
      addToCart: "/api/products/6/cart",
    },
  },
  {
    id: 7,
    name: "Portable Power Bank 20000mAh",
    price: 1799,
    currency: "INR",
    image:
      "https://callmateindia.com/cdn/shop/files/4_e178b992-b1d5-413b-8315-25dc6b166e75.jpg?v=1721379891&width=1000",
    actions: {
      buy: "/api/products/7/buy",
      addToCart: "/api/products/7/cart",
    },
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 1999,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    actions: {
      buy: "/api/products/8/buy",
      addToCart: "/api/products/8/cart",
    },
  },
  {
    id: 9,
    name: "HD Webcam 1080p",
    price: 1599,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1626581795188-8efb9a00eeec?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYmNhbXxlbnwwfHwwfHx8MA%3D%3D",
    actions: {
      buy: "/api/products/9/buy",
      addToCart: "/api/products/9/cart",
    },
  },
  {
    id: 10,
    name: "Noise Cancelling Headphones",
    price: 4999,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    actions: {
      buy: "/api/products/10/buy",
      addToCart: "/api/products/10/cart",
    },
  },
  {
    id: 11,
    name: "Smartphone Stand",
    price: 299,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&q=80",
    actions: {
      buy: "/api/products/11/buy",
      addToCart: "/api/products/11/cart",
    },
  },
  {
    id: 12,
    name: "External Hard Drive 1TB",
    price: 3499,
    currency: "INR",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CfrOY8fSuLSWk0j4RUm0bjyftawfKTcUm9TDtFj7w2zA-PWZx1xfI-k&s=10",
    actions: {
      buy: "/api/products/12/buy",
      addToCart: "/api/products/12/cart",
    },
  },
  {
    id: 13,
    name: "Gaming Chair",
    price: 8999,
    currency: "INR",
    image:
      "https://www.greensoul.online/cdn/shop/files/r1.jpg?v=1756712404&width=1080",
    actions: {
      buy: "/api/products/13/buy",
      addToCart: "/api/products/13/cart",
    },
  },
  {
    id: 14,
    name: "LED Desk Lamp",
    price: 799,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
    actions: {
      buy: "/api/products/14/buy",
      addToCart: "/api/products/14/cart",
    },
  },
  {
    id: 15,
    name: "Wireless Charging Pad",
    price: 999,
    currency: "INR",
    image:
      "https://media-ik.croma.com/Croma%20Assets/Communication/Chargers%20and%20Batteries/Images/265098_0_n6d8st.png",
    actions: {
      buy: "/api/products/15/buy",
      addToCart: "/api/products/15/cart",
    },
  },
  {
    id: 16,
    name: "Laptop Cooling Pad",
    price: 1199,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500&q=80",
    actions: {
      buy: "/api/products/16/buy",
      addToCart: "/api/products/16/cart",
    },
  },
  {
    id: 17,
    name: "Smart LED Bulb",
    price: 499,
    currency: "INR",
    image:
      "https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-smart-led-bulb/m/7480527f0c471cacb8ec8bb75f5c8ad0.jpg",
    actions: {
      buy: "/api/products/17/buy",
      addToCart: "/api/products/17/cart",
    },
  },
  {
    id: 18,
    name: "Fitness Tracker Band",
    price: 1899,
    currency: "INR",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
    actions: {
      buy: "/api/products/18/buy",
      addToCart: "/api/products/18/cart",
    },
  },
  // {
  //   id: 19,
  //   name: "Portable Bluetooth Projector",
  //   price: 6999,
  //   currency: "INR",
  //   image:
  //     "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&q=80",
  //   actions: {
  //     buy: "/api/products/19/buy",
  //     addToCart: "/api/products/19/cart",
  //   },
  // },
  // {
  //   id: 20,
  //   name: "USB Type-C Hub 7-in-1",
  //   price: 1699,
  //   currency: "INR",
  //   image:
  //     "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=500&q=80",
  //   actions: {
  //     buy: "/api/products/20/buy",
  //     addToCart: "/api/products/20/cart",
  //   },
  // },
];

function showProduct() {
  const product = document.getElementById("product-list");

  product.innerHTML = "";

  products.forEach((e) => {
    product.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <div class="card-body">

                         <img src="${e.image}" class="card-img-top" alt="${e.name}" style="height:220px; object-fit:cover;">

                        <h5>${e.name}</h5>

                        <p>Price : ₹${e.price}</p>

                        <p>Currency : ${e.currency}</p>

                        <button class="btn btn-primary">
                            Add To Cart
                        </button>

                    </div>
                </div>
            </div>
        `;
  });
}

showProduct();


  // local storage

  // set and get

  const data = {

    name:"Gohil Gnandipsinh",
    work:"developer"
  }

  localStorage.setItem("data",JSON.stringify(data))

// get 

const user = JSON.A(localStorage.getItem("data"));


console.log(user)