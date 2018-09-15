const overlay = document.getElementById('overlay');
const startGame = overlay.querySelector('a');
const qwerty = document.getElementById('qwerty');
console.log(qwerty);
const keyrow = qwerty.querySelectorAll('button');
console.log(keyrow);
const phrase = document.getElementById('phrase');
const ul = phrase.firstElementChild;

let missed = 0;

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
console.log(phraseArray);

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

qwerty.addEventListener('click', () => {
    console.log("clicked");
});
