function selectProduct() {
    let product = "Laptop";

    return new Promise((resolve, reject) => {
        if (!product) {
            reject("No product selected");
        } else {
            setTimeout(() => {
                console.log("Product Selected");
                resolve(product);
            }, 1000);
        }
    });
}

function makePayment(product) {
    let payment = true;

    return new Promise((resolve, reject) => {
        if (!payment) {
            reject("Payment Failed");
        } else {
            setTimeout(() => {
                console.log("Payment Successful");
                resolve(product);
            }, 1500);
        }
    });
}

function packProduct(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Product Packed");
            resolve(product);
        }, 2000);
    });
}

function deliverProduct(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Product Delivered");
            resolve("Order Completed");
        }, 1500);
    });
}

async function shoppingOrder() {
    try {
        const A1 = await selectProduct();
        const A2 = await makePayment(A1);
        const A3 = await packProduct(A2);
        const A4 = await deliverProduct(A3);

        console.log(A4);
    } catch (err) {
        console.log(err);
    }
}

shoppingOrder();