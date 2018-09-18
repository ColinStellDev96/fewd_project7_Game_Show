const overlay = document.getElementById('overlay');
const headline = overlay.querySelector('h2');
const startGame = overlay.querySelector('a');
const qwerty = document.querySelector('#qwerty');
const buttons = qwerty.querySelectorAll('button');
const phrase = document.getElementById('phrase');
const ul = phrase.firstElementChild;
const scoreboard = document.getElementById('scoreboard');
const hands = scoreboard.querySelectorAll('i');

// phrases are taken from various Thrice lyrics
let phrases = [
    'Only Us',
    'The Grey',
    'The Dark',
    'Just Breath',
    'Everything Belongs',
    'My Soul',
    'A Branch In The River',
    'Hold Up A Light',
    'Blood On Blood',
    'Beyond The Pines'
];

// Get Random Phrase Function from the Phrases Array
getRandomPhrase = (array) => {
    let randomPhrase = array[Math.floor(Math.random() * array.length)];
    return randomPhrase.split('');
}

const phraseArray = getRandomPhrase(phrases);


// Adding Phrase from Random Phrase function to the Display
addPhraseToDisplay = (array) => {
    for (let i = 0; i < array.length ; i ++ ) {
        let listElement = document.createElement('li');
        listElement.textContent = array[i];
        if (listElement.textContent === " ") {
            listElement.className = 'space';
            ul.appendChild(listElement);
        } else {
            listElement.className = 'letter';
            ul.appendChild(listElement);
        }
    }
}
addPhraseToDisplay(phraseArray);

// Button Clicked & Check Letter Function/Event Listeners
checkLetter = (guess) => {
    let letterFound = null;
    const letter = document.getElementsByClassName('letter');
    for (i = 0; i < letter.length; i += 1) {
        if (letter[i].textContent.toLowerCase() === guess){
            letter[i].classList.add('show');
            letterFound = true;
        } 
    }
    return letterFound;
}

let missed = 0;

// Checks to see if the User has either won or lost the game
checkWin = () => {
    const shown = document.getElementsByClassName('show');
    const letter = document.getElementsByClassName('letter');
    if (letter.length === shown.length) {
        overlay.className = "win";
        overlay.style.display = "flex";
        headline.textContent = "Rock On, You Crushed It!";
        startGame.textContent = "Play Again";
    } else if (missed === 5) {
        overlay.className = 'lose';
        overlay.style.display = "flex";
        headline.textContent = "So Sad, Play Again";
        startGame.textContent = "Try Again";
    }
}

// Checks which button the keyboard is clicked and based on that either adds a letter or takes away a try
qwerty.addEventListener('click', (event) => {
    if (event.target.type === 'submit') {
        event.target.classList.add('chosen');
        event.target.disabled = "true";
        let guess = event.target.textContent;
        const match = checkLetter(guess);
        if (match != true) {
        missed ++;
        hands[hands.length - missed].className="far fa-hand-paper";  
       }
    checkWin();
    }
})

// Starts Game & Resets the game after a win or loss
startGame.addEventListener('click', () => {
    overlay.className = "start";
    missed = 0;
    ul.textContent = '';
    for (i = 0; i < buttons.length; i += 1) {
        buttons[i].removeAttribute('class');
        buttons[i].removeAttribute('disabled');
    } 
    for (i = 0; i < hands.length; i += 1) {
        hands[i].className="fas fa-hand-paper";
    }
    const phraseArray = getRandomPhrase(phrases);
    addPhraseToDisplay(phraseArray);
    overlay.style.display = "none";
});