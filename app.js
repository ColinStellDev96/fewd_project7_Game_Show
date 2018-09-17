const overlay = document.getElementById('overlay');
const startGame = overlay.querySelector('a');
const qwerty = document.getElementById('qwerty');
console.log(qwerty);
const keyrow = qwerty.querySelectorAll('button');
const phrase = document.getElementById('phrase');
const ul = phrase.firstElementChild;

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
    const letter = document.getElementsByClassName('letter');
    let letterFound = null;
    for (i = 0; i < letter.length; i += 1) {
        if (letter[i].textContent.toLowerCase() === guess){
            letter[i].classList.add('show');
            letterFound = true;
        }
    }
    return letterFound;
}

qwerty.addEventListener('click', (event) => {
    let guess = event.target.textContent;
    checkLetter(guess);
    if (event.target.type === 'submit') {
        event.target.classList.add('chosen');
    }
})

let missed = 0;