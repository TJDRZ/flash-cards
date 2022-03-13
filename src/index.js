import jsonCards from "./cards.json";
import "./reset.css";
import "./style.css";

const cardElement = document.querySelector(".card");
const buttonElement = document.querySelector(".next");

const cards = Object.entries(jsonCards);
let currentCardIndex = 0;

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min));
}

cardElement.addEventListener("click", () => {
  cardElement.innerText = "";
  for (let entry in cards[currentCardIndex][1]) {
    const pElement = document.createElement("p");
    pElement.innerText = `${cards[currentCardIndex][1][entry]}`;
    cardElement.appendChild(pElement);
  }
});

function drawCard() {
  currentCardIndex = randomNumber(1, cards.length);
  cardElement.innerText = cards[currentCardIndex][0];
}

buttonElement.addEventListener("click", () => {
  drawCard();
});

drawCard();
