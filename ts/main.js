"use strict";
const cards = document.querySelectorAll(".card");
let firstCard, secondCard;
let hasAsigned = false;
let closeBoard = false;
document.addEventListener("DOMContentLoaded", () => {
    cards.forEach((card) => {
        card.style.order = `${Math.floor(Math.random() * 12)}`;
        card.addEventListener("click", handleTarget);
    });
});
const handleTarget = (e) => {
    if (closeBoard)
        return;
    const target = e.target;
    if (target.classList.contains("card")) {
        target.classList.add("flip");
        asignCards(target);
    }
};
function asignCards(target) {
    if (!hasAsigned) {
        firstCard = target;
        hasAsigned = true;
        firstCard.classList.remove("card");
    }
    else {
        closeBoard = true;
        secondCard = target;
        firstCard.classList.add("card");
        isMatch(firstCard, secondCard);
        hasAsigned = false;
    }
}
function isMatch(firstCard, secondCard) {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        firstCard.removeEventListener("click", handleTarget);
        secondCard.removeEventListener("click", handleTarget);
        console.log(firstCard.dataset.name, secondCard.dataset.name);
        const removeCard = setInterval(() => {
            closeBoard = false;
            clearInterval(removeCard);
        }, 500);
    }
    else {
        console.log(firstCard.dataset.name, secondCard.dataset.name);
        const removeFlip = setInterval(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            closeBoard = false;
            clearInterval(removeFlip);
        }, 1200);
    }
}
