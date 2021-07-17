const AMOUNT_OF_DIVS = 500;
const DIV_SIZE = 100;
const REFRESH_TIME = 1000;
const MARGIN = 10;

function getRandomNumber(min = 0, max = 1) {
  const number = Math.random() * (max - min) + min;
  return number;
}
const getRandomBigNumber = () => Math.floor(Math.random() * 100);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(getRandomBigNumber());

function createDivs() {
  for (let index = 0; index < AMOUNT_OF_DIVS; index++) {
    const div = document.createElement("div");
    div.id = "id_" + index;
    div.className = "div";
    div.style.border = `10px solid ${getRandomColor()}`;
    div.style.minHeight = DIV_SIZE + "px";
    div.style.minWidth = DIV_SIZE + "px";
    div.style.margin = `${MARGIN}px`;
    div.style.backgroundColor = getRandomColor();
    document.body.appendChild(div);
    document.body.style.background = `linear-gradient(${getRandomBigNumber()}deg, ${getRandomColor()}, ${getRandomColor()})`;
  }
}

function init() {
  createDivs();
}

init();

function animate() {
  setInterval(() => {
    //Anime les divs
    const divs = document.querySelectorAll(".div");
    for (let index = 0; index < divs.length; index++) {
      // divs[index].style.width = getRandomNumber(10, 100);
      // divs[index].style.height = getRandomNumber(10, 100);
      divs[index].style.border = `10px solid ${getRandomColor()}`;
      divs[index].style.backgroundColor = getRandomColor();
      divs[index].style.borderRadius = getRandomBigNumber() + "%";
      divs[index].style.opacity = getRandomNumber();
      divs[index].style.transform = `rotate(${getRandomBigNumber()}deg)`;
    }
    // anime le body
    // document.body.style.backgroundColor = getRandomColor();
  }, REFRESH_TIME);
}

document.addEventListener("DOMContentLoaded", animate);
