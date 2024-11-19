const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Adding a streak counter to track the number of consecutive victories
let streakCount = 0;

// Adding a streak display box to the UI
const streakBox = document.createElement("div");
streakBox.className = "streak-box";
streakBox.innerHTML = `<b>Streak: </b><span id="streak-count">${streakCount}</span>`;
document.querySelector(".container").appendChild(streakBox); // Assuming .container is the main game wrapper

const updateStreakDisplay = () => {
    document.getElementById("streak-count").innerText = streakCount;
};

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;
let wordIndex = 0; // Index to track the current word in the wordList

const resetGame = () => {
    // Resetting game variables and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    
    // Generate the word display, showing spaces as already "guessed"
    wordDisplay.innerHTML = currentWord.split("").map(char => {
        if (char === " ") {
            correctLetters.push(char); // Automatically mark spaces as guessed
            return `<li class="letter guessed">&nbsp;</li>`;
        }
        return `<li class="letter"></li>`;
    }).join("");

    keyboardDiv.querySelectorAll("button").forEach(btn => (btn.disabled = false));
    gameModal.classList.remove("show");
};

const getNextWord = () => {
    // Selecting the next word and hint sequentially from the wordList
    const { word, hint } = wordList[wordIndex];
    currentWord = word; // Setting the currentWord
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
    wordIndex = (wordIndex + 1) % wordList.length; // Increment index and loop back to start if needed
};

const gameOver = (isVictory) => {
    // After game completion, show modal with relevant details
    const modalText = isVictory ? `You found the word:` : "The correct word was:";
    gameModal.querySelector("img").src = `images/${isVictory ? "victory" : "lost"}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? "Congrats!" : "Game Over!";
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");

    // Update the streak counter
    if (isVictory) {
        streakCount++;
    } else {
        streakCount = 0;
    }
    updateStreakDisplay(); // Update the streak display in the UI
};

const initGame = (button, clickedLetter) => {
    // Checking if clickedLetter exists in the currentWord
    if (currentWord.includes(clickedLetter)) {
        // Showing all correct letters in the word display
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // If clicked letter doesn't exist, update the wrongGuessCount and hangman image
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true; // Disabling the clicked button so the user can't click it again
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Check if the game is over
    const guessedWordLength = [...currentWord].filter(
        char => char !== " " && correctLetters.includes(char)
    ).length;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (guessedWordLength === currentWord.replace(/ /g, "").length) return gameOver(true);
};

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

getNextWord();
playAgainBtn.addEventListener("click", getNextWord);

