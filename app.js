const big = document.querySelector(".big");

const inicio = () => {
  interval();
};

const first = () => {
  big.style.transform = "translateX(7%)";
};

const second = () => {
  big.style.transform = "translateX(-33%)";
};

const third = () => {
  big.style.transform = "translateX(-73%)";
};

const changeImage = () => {
  setTimeout(first, 1000);
  setTimeout(second, 5000);
  setTimeout(third, 8000);
};

const interval = () => {
  setInterval(changeImage, 10000);
};
