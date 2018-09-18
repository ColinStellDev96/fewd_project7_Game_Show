const overlay = document.getElementById('overlay');
const headline = overlay.querySelector('h2');
const startGame = overlay.querySelector('a');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = phrase.firstElementChild;
const scoreboard = document.getElementById('scoreboard');
const ol = scoreboard.querySelector('ol');
const imgs = scoreboard.querySelectorAll('img');

startGame.addEventListener('click', () => {
    overlay.style.display = "none";
});

// phrases are taken from various Thrice lyrics
let phrases = [
    'They Are Only Chasing Safety',
    'Define The Great Line',
    'Lost In The Sound of Seperation',
    'O Disambiguation',
    'Erase Me'
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
    startGame.addEventListener('click', () => {
        overlay.className = "start";
        missed = 0;
        ul.textContent = '';
        let list = document.querySelector('ul');
        const li = list.querySelectorAll('li');
        console.log(li);
        li[li.length].removeAttribute("class");
        li[li.length].removeAttribute("disabled");
        imgs[imgs.length].src="images/liveHeart.png";
        const phraseArray = getRandomPhrase(phrases);
        addPhraseToDisplay(phraseArray);
        overlay.style.display = "none";
    });
}

qwerty.addEventListener('click', (event) => {
    let guess = event.target.textContent;
    const match = checkLetter(guess);
    if (match != true) {
        missed ++;
        imgs[imgs.length - missed].src="images/lostHeart.png" 
    }
    if (event.target.type === 'submit') {
        event.target.classList.add('chosen');
        event.target.disabled = "true";
    }
    checkWin();
})