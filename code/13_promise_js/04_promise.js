const FoodOrder = new Promise((resolve, reject) => {
  let items = ["Pizza", "Burger"];

  // items = [];

  if (items.length === 0) {
    reject("No Items Selected");
  } else {
    setTimeout(() => {
      console.log("Items Selected");
      resolve("FD12345");
    }, 2000);
  }
});

FoodOrder.then((orderId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment Successful");
      resolve(orderId);
    }, 2000);
  });
})

  .then((orderId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Food is Being Prepared");
        resolve(orderId);
      }, 2000);
    });
  })

  .then((orderId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(orderId, "Food Delivered");
        resolve(orderId);
      }, 2000);
    });
  })

  .catch((err) => {
    console.log(err);
  })

  .finally(() => {
    console.log("Thank You for Ordering");
  });
