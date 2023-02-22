/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const topSuits = document.querySelector("#topSuits");
  const numContainer = document.querySelector("#numContainer");
  const bottomSuits = document.querySelector("#bottomSuits");
  const newCardBtn = document.querySelector("#newCardBtn");
  const cardContainer = document.querySelector("#cardContainer");
  const inputWidth = document.querySelector("#inputWidth");
  const inputHeight = document.querySelector("#inputHeight");

  let width = "";
  let height = "";

  inputWidth.addEventListener("change", e => {
    width = e.target.value;
  });
  inputHeight.addEventListener("change", e => {
    height = e.target.value;
  });
  newCardBtn.addEventListener("click", () => {
    changeProperties();
    inputWidth.value = "";
    inputHeight.value = "";
  });

  const changeProperties = () => {
    cardContainer.style.width = width;
    cardContainer.style.height = height;

    if (width >= "450px" || height >= "450px") {
      topSuits.style.fontSize = "50px";
      bottomSuits.style.fontSize = "50px";
      numContainer.style.fontSize = "80px";
    } else if (width >= "300px" || height >= "300px") {
      topSuits.style.fontSize = "25px";
      bottomSuits.style.fontSize = "25px";
      numContainer.style.fontSize = "35px";
    } else if (width >= "200px" || height >= "200px") {
      topSuits.style.fontSize = "15px";
      bottomSuits.style.fontSize = "15px";
      numContainer.style.fontSize = "25px";
    } else {
      topSuits.style.fontSize = "50px";
      bottomSuits.style.fontSize = "50px";
      numContainer.style.fontSize = "80px";
    }
  };
};

newCardBtn.addEventListener("click", () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["♦", "♥", "♠", "♣"];
  const random = () => {
    let suitRandom = Math.floor(Math.random() * suits.length);
    let numberRandom = Math.floor(Math.random() * numbers.length);
    let randomSuit = suits[suitRandom];
    let randomNumber = numbers[numberRandom];
    topSuits.innerHTML = randomSuit;
    numContainer.innerHTML = randomNumber;
    bottomSuits.innerHTML = randomSuit;

    if (randomSuit == suits[0] || randomSuit == suits[1]) {
      topSuits.style.color = "red";
      bottomSuits.style.color = "red";
    } else {
      topSuits.style.color = "black";
      bottomSuits.style.color = "black";
    }
  };
  random();
  setInterval(function() {
    random();
  }, 10000);
});
