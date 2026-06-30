let intervalID;

const currentTime = () => {
  const time = new Date().toLocaleTimeString();

  console.log(time);

};

intervalID = setInterval(currentTime, 2000);

setTimeout(() => {

  clearInterval(intervalID);

  console.log("time stopped");
}, 10000);