//hangman game pseudocode

//an array of themed words is needed - guitar effects pedals
var hangmanWords = ["distortion", "delay", "tremolo", "octave", "chorus", "flanger", "compression", "overdrive", "equalization", "looper", "reverb"];
//an array of sound effects in the game
var effectsMP3 = [];
//an array of guitar effects photos
var effectsImg = [];
//an array of hints for each effect
var hintsBox = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

//var hangmanWordsList = [
//{ word: "distortion", hint:"Usually achieved by significantly increasing the gain", photo:"" },
//{ word: "delay", hint:"", photo:"" }, { word: "tremolo", hint:"", photo:"" }, 
//{ word: "octave", hint:"", photo:"" }, { word: "chorus", hint:"", photo:"" }, 
//{ word: "flanger", hint:"", photo:"" }, { word: "compression", hint:"", photo:""}, 
//{ word: "overdrive", hint:"", photo:"" }, { word: "equalization", hint:"", photo:""}, 
//{ word:"looper", hint:"", photo:"" }, { word: "reverb", hint:"", photo:""}
//];

//random word chosen from the hangmanWords array
let wordGen = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
let wordUnderscore = [];
let rightGuesses = [];
let wrongGuesses = [];
let remainingGuesses = 10;

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

//game begins when player presses a key to make their first guess
document.addEventListener('keypress', (event) => {
    let typedGuess = String.fromCharCode(event.keyCode);

    //if letter has already been guessed, show an alert and 
    if (rightGuesses.indexOf(typedGuess) > -1 || wrongGuesses.indexOf(typedGuess) > -1) {
        alert("You already guessed this letter");

    } else {

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
    //if the player reaches 5 wrong guesses, the player loses the game
    if (wrongGuesses.length > 4) {
        alert(wordGen + " - You Lose!");
        //reload resources after alert is clicked
        window.location.reload(false);
    }}
    //display active variables and arrays on screen
    document.querySelector(".underscoresArea").innerHTML = wordUnderscore.toString();
    document.querySelector(".rightGuessArea").innerHTML = rightGuesses.toString();
    document.querySelector(".wrongGuessArea").innerHTML = wrongGuesses.toString();
    document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
    
});

    //get hint function

    $(".getHintButton").click(function() {
        remainingGuesses = remainingGuesses - 1;
        if (wordGen === hangmanWords[0]) {
            alert(hintsBox[0]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[1]) {
            alert(hintsBox[1]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[2]) {
            alert(hintsBox[2]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[3]) {
            alert(hintsBox[3]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[4]) {
            alert(hintsBox[4]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[5]) {
            alert(hintsBox[5]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[6]) {
            alert(hintsBox[6]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[7]) {
            alert(hintsBox[7]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[8]) {
            alert(hintsBox[8]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[9]) {
            alert(hintsBox[9]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
        if (wordGen === hangmanWords[10]) {
            alert(hintsBox[10]);
            document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
        }
  });