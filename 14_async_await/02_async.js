function selectSeat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Seat Selected");
            resolve("A12");
        }, 1000);
    });
}

function makePayment(seatNo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment Successful");
            resolve(seatNo);
        }, 2000);
    });
}

function generateTicket(seatNo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Ticket Generated");
            resolve(`Ticket for Seat ${seatNo}`);
        }, 1000);
    });
}

function sendTicket(ticket) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ticket Sent on Email");
            resolve("Booking Completed");
        }, 1000);
    });
}

async function bookMovieTicket() {
    try {
        const seat = await selectSeat();
        const payment = await makePayment(seat);
        const ticket = await generateTicket(payment);
        const result = await sendTicket(ticket);

        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

bookMovieTicket();


// function orderFood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Food Ordered");
//             resolve("Pizza");
//         }, 1000);
//     });
// }

// function prepareFood(food) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`${food} Prepared`);
//             resolve(food);
//         }, 2000);
//     });
// }

// function deliverFood(food) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`${food} Delivered`);
//             resolve("Enjoy Your Meal!");
//         }, 1000);
//     });
// }

// async function foodApp() {
//     try {
//         const food = await orderFood();
//         const prepared = await prepareFood(food);
//         const result = await deliverFood(prepared);

//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// foodApp();


// function selectProduct() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Product Selected");
//             resolve("Laptop");
//         }, 1000);
//     });
// }

// function placeOrder(product) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Order Placed");
//             resolve(product);
//         }, 2000);
//     });
// }

// function shipProduct(product) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`${product} Shipped`);
//             resolve(product);
//         }, 1000);
//     });
// }

// function deliverProduct(product) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`${product} Delivered`);
//             resolve("Shopping Completed");
//         }, 1000);
//     });
// }

// async function shoppingApp() {
//     try {
//         const product = await selectProduct();
//         const order = await placeOrder(product);
//         const shipped = await shipProduct(order);
//         const result = await deliverProduct(shipped);

//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// shoppingApp();



