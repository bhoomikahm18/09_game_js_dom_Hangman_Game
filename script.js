//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//Options values for buttons
let options = {
    fruits: [
        "Apple",
        "Blueberry",
        "Mandarin",
        "Pineapple",
        "Pomegranate",
        "Watermelon",
    ],
    animals: ["Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra"],
    countries: [
        "India",
        "Hungary",
        "Kyrgyzstan",
        "Switzerland",
        "Zimbabwe",
        "Dominica",
    ],
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select An Options</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
}

//Word Generator
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //If optionValue matches the button innerText then high light the button
    optionsButtons.forEach((button) => {
        if (button.innerHTML.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });
};

//Initial function (Called when page loads/user presses new game)
const initializer = () => {
    winCount = 0;
    count = 0;

    //For creating letter buttons
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        //Number to ASCII[A-Z]
        button.innerText = string.fromCharCode(i);
        letterContainer.append(button);
    }

    displayOptions();
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;