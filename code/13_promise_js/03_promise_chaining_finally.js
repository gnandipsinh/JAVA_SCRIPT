let orderId = "";

const Shopping = new Promise((resolve, reject) => {
  let cart = ["shoes", "mobile", "laptop"];

  // cart = [];

  if (cart.length <= 0) {
    reject("Please enter your item");
  } else {
    setTimeout(() => {
      orderId = "1234567qwee";
      console.log("Order Booked");
      resolve(orderId);
    }, 1000);
  }
});

Shopping.then((orderId) => {
  return new Promise((resolve, reject) => {
    if (orderId === "") {
      reject("Order failed");
    } else {
      setTimeout(() => {
        console.log("Order Created");
        resolve(orderId);
      }, 1000);
    }
  });
})

  .then((orderId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Seller was informed about the order");
        resolve(orderId);
      }, 1000);
    });
  })

  .then((orderId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(orderId, "Delivered to Customer");
        resolve(orderId);
      }, 1000);
    });
  })

  .catch((err) => {
    console.log(err);
  })

  .finally(() => {
    setTimeout(() => {
      console.log("Do you want to explore more?");
    }, 1000);
  });
