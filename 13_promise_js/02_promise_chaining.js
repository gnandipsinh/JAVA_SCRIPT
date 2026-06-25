function Payment(amount) {
  return new Promise((resolve, reject) => {
    if (amount <= 0) {
      reject("Invalid Amount");
    } else {
      setTimeout(() => {
        console.log(`Payment of ₹${amount} initialized`);
        resolve(amount);
      }, 1000);
    }
  });
}

let balance = 20000;

function CheckBalance(amount) {
  return new Promise((resolve, reject) => {
    if (amount > balance) {
      reject("Insufficient Balance");
    } else {
      setTimeout(() => {
        console.log(`Available Balance : ₹${balance}`);
        resolve(amount);
      }, 1000);
    }
  });
}

function Withdraw(amount) {
  return new Promise((resolve) => {
    setTimeout(() => {
      balance -= amount;
      console.log(`₹${amount} has been deducted`);
      resolve(amount);
    }, 2000);
  });
}

function UpdateBalance() {
  return new Promise((resolve, reject) => {
    if (balance <= 0) {
      reject("Account is Empty");
    } else {
      setTimeout(() => {
        console.log(`Remaining Balance : ₹${balance}`);
        resolve(balance);
      }, 1000);
    }
  });
}

function PaymentStatus(balance) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Payment Successful\nCurrent Balance : ₹${balance}`);
    }, 1000);
  });
}

// Main Program
Payment(5000)
  .then((amount) => {
    return CheckBalance(amount);
  })
  .then((amount) => {
    return Withdraw(amount);
  })
  .then(() => {
    return UpdateBalance();
  })
  .then((balance) => {
    return PaymentStatus(balance);
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });