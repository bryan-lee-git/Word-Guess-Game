//hangman game pseudocode

//an array of themed words is needed - guitar effects pedals

const hangmanWords = ["distortion", "fuzz", "delay", "volume", "tremolo", "octave", "wah", "chorus", "flanger", "tuner", "compression", "overdrive", "equalization", "looper", "reverb"];

//player presses any key to start game

//random word chosen from the hangmanWords array

let wordGen = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
let wordUnderscore = [];
let rightGuesses = [];
let wrongGuesses = [];
let remainingGuesses = 15;

//testing
console.log(wordGen);

//make underscore display based on length of word

let underscoreGen = () => {
    for (var i = 0; i < wordGen.length; i++) {
        wordUnderscore.push('_')
    }
    return wordUnderscore;

}

//testing
console.log(underscoreGen()); 

//get user's guess

document.addEventListener('keypress', (event) => {
    let typedGuess = String.fromCharCode(event.keyCode);

    //if guess is right, push to rightGuesses array
    if (wordGen.indexOf(typedGuess) > -1) {
        rightGuesses.push(typedGuess);
        //replace underscore with the right guess
        wordUnderscore[wordGen.indexOf(typedGuess)] = typedGuess;
        //testing
        console.log(wordUnderscore);
    } 
    //if wrong, push to wrongGuesses array
    else (wrongGuesses.push(typedGuess));   
    //testing
    console.log(wrongGuesses);
    //if all underscores have been replaced, the player wins the game
    if (rightGuesses.length === wordUnderscore.length) {
        alert(wordGen + " - You Win!");
        //reload resources after alert is clicked
        window.location.reload(false);
    }
    //if the player reaches 15 wrong guesses, the player loses the game
    if (wrongGuesses.length > 15) {
        alert(wordGen + " - You Lose!");
        //reload resources after alert is clicked
        window.location.reload(false);
    }
    //display active variables and arrays on screen
    document.querySelector(".underscoresArea").innerHTML = wordUnderscore.toString();
    document.querySelector(".rightGuessArea").innerHTML = rightGuesses.toString();
    document.querySelector(".wrongGuessArea").innerHTML = wrongGuesses.toString();
    document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
});