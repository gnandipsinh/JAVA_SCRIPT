const currentYear = () => {
  console.log("checking a Current year");

  setTimeout(() => {
    let currentYear = new Date().getFullYear();
    console.log("current year:", currentYear);
  }, 5000);
};

currentYear();
