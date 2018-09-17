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
    'Are you ready for my soul',
    'I am learning how to lean into the grey',
    'Stay deep in the moment and just breath',
    'Holding onto a branch in the river',
    'I will meet you there beyone the pines'
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
    console.log(letter);
    for (i = 0; i < letter.length; i += 1) {
        console.log(letter[i]);
        if (letter[i].textContent.toLowerCase() === guess){
            letter[i].classList.add('show');
        }
    }
}

qwerty.addEventListener('click', (event) => {
    let guess = event.target.textContent;
    checkLetter(guess);
})

let missed = 0;