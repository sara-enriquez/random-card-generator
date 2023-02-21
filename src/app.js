/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const topSuits = document.querySelector("#topSuits");
  const numContainer = document.querySelector("#numContainer");
  const bottomSuits = document.querySelector("#bottomSuits");
  const newCardBtn = document.querySelector("#newCardBtn");
};

newCardBtn.addEventListener("click", () => {
  let numeros = [
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
  let palos = ["♦", "♥", "♠", "♣"];
  const random = () => {
    let paloRandom = Math.floor(Math.random() * palos.length);
    let numeroRandom = Math.floor(Math.random() * numeros.length);
    let randomPalo = palos[paloRandom];
    let randomNumero = numeros[numeroRandom];
    topSuits.innerHTML = randomPalo;
    numContainer.innerHTML = randomNumero;
    bottomSuits.innerHTML = randomPalo;

    if (randomPalo == palos[0] || randomPalo == palos[1]) {
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
