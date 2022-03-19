import jsonPorts from "./json/ports.json";
import jsonWirelessStandards from "./json/wireless-standards.json";
import jsonCables from "./json/cables.json";
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

document.querySelector(".cables").addEventListener("click", () => {
  cards = Object.entries(jsonCables);
  drawCard();
});

// Draws and Flips

let currentCardIndex = 0;
let drawnCards = [];

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
  if (drawnCards.length === cards.length) {
    drawnCards = [];
    drawCard();
  } else if (drawnCards.includes(currentCardIndex)) {
    currentCardIndex = randomNumber(1, cards.length);
    drawCard();
  } else {
    cardElement.innerText = cards[currentCardIndex][0];
    drawnCards.push(currentCardIndex);
  }
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min));
}
