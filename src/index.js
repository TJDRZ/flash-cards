import jsonPorts from "./json/ports.json";
import jsonWirelessStandards from "./json/wireless-standards.json";
import "./styles/reset.css";
import "./styles/style.css";

// Set-up

const cardElement = document.querySelector(".card");
const nextButton = document.querySelector(".next");

let cards = "Welcome to TJDRZ's Comptia A+ Flash Cards!";
cardElement.textContent = cards;

// Nav Study Area Buttons

document.querySelector(".ports").addEventListener("click", () => {
  cards = Object.entries(jsonPorts);
  drawCard();
});

document.querySelector(".wireless-standards").addEventListener("click", () => {
  cards = Object.entries(jsonWirelessStandards);
  drawCard();
});

// Draws and Flips

let currentCardIndex = 0;

cardElement.addEventListener("click", () => {
  cardElement.innerText = "";
  for (let entry in cards[currentCardIndex][1]) {
    const pElement = document.createElement("p");
    pElement.innerText = `- ${cards[currentCardIndex][1][entry]}`;
    cardElement.appendChild(pElement);
  }
});

nextButton.addEventListener("click", () => {
  drawCard();
});

function drawCard() {
  currentCardIndex = randomNumber(1, cards.length);
  cardElement.innerText = cards[currentCardIndex][0];
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min));
}
