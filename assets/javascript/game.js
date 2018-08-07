//hangman game pseudocode

//an array of themed words is needed - guitar effects pedals
var hangmanWords = ["distortion", "delay", "tremolo", "octave", "chorus", "flanger", "compression", "overdrive", "equalization", "looper", "reverb"];
//an array of hints for each effect
var hintsBox = ["This guitar effect is usually achieved by significantly increasing the gain.", "An effects unit which records an input signal to an audio storage medium, and then plays it back after a period of time.", "A modulation effect that creates a repeating change in volume.", "An effects unit which mix the input signal with a synthesised signal whose musical tone is an octave lower or higher than the original.", "Occurs when individual sounds with approximately the same time, and very similar pitches converge and are perceived as one.", "An audio effect produced by mixing two identical signals together, one signal delayed by a small and gradually changing period, usually smaller than 20 milliseconds.", "Automatic volume control. It turns down the volume when a signal becomes louder than a set level and turns it back up when the signal drops below that level.", "Often a twofold effect: either to provide a gain boost that pushes a tube amp into distortion, or to approximate the mildly distorted sound of a slightly peaking tube amp. In practice, most do a little of both.", "A process commonly used to alter the frequency response of an audio system using linear filters. Most hi-fi equipment uses relatively simple filters to make bass and treble adjustments.", "This effect ecords short passages played on an instrument and plays them back on repeat", "An effect created when a sound or signal is reflected causing a large number of reflections to build up and then decay as the sound is absorbed by the surfaces of objects in the space – which could include furniture, people, and air."];
//create variable for game sounds
var winSound = new Audio('./assets/sounds/winSound.mp3');
var loseSound = new Audio('./assets/sounds/loseSound.mp3')
var hintSound = new Audio('./assets/sounds/hintSound.mp3')
//random word chosen from the hangmanWords array
var wordGen = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
let wordUnderscore = [];
let rightGuesses = [];
let wrongGuesses = [];
let remainingGuesses = 10;
let winCount = 0;
//testing
console.log(wordGen);
//function for audio play on win and lose
function playAudio() { 
    x.play(); 
} 
//make underscore display based on length of word
let underscoreGen = () => {
    for (var i = 0; i < wordGen.length; i++) {
        wordUnderscore.push('_')
    }
    return wordUnderscore;
}
//testing
console.log(underscoreGen()); 
//game needs to recognize keypresses and begin when player presses a key to make their first guess
document.addEventListener('keypress', (event) => {
    let typedGuess = String.fromCharCode(event.keyCode);
    //if letter has already been guessed, show an alert 
    if (rightGuesses.lastIndexOf(typedGuess) > -1 || wrongGuesses.lastIndexOf(typedGuess) > -1) {
        alert("You already guessed this letter");
    } else {
    //if guess is right, push to rightGuesses array
    if (wordGen.indexOf(typedGuess) > -1) {
        rightGuesses.push(typedGuess);
        //replace all matching underscores with the right guess
        wordUnderscore[wordGen.indexOf(typedGuess)] = typedGuess;
        wordUnderscore[wordGen.lastIndexOf(typedGuess)] = typedGuess;
        //testing
        console.log(wordUnderscore);
        console.log(rightGuesses);
    }
        //if wrong, push to wrongGuesses array
        else (wrongGuesses.push(typedGuess));   
        //testing
        console.log(wrongGuesses);
    //if all underscores have been replaced, the player wins the game
    if (wordGen === wordUnderscore.join("")) {
        //winSound plays
        winSound.play ();
        //you are alerted that you have won the round
        alert(wordGen + " - You Win!");
        //add to win count
        winCount++;
        //empty right guess, wrong guess, and wordUnderscore arrays
        rightGuesses = [];
        wordUnderscore = [];
        //get new word, convert to underscores
        wordGen = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
        underscoreGen();
    }
    //if the player reaches 10 wrong guesses, the player loses the game
    if (wrongGuesses.length > 9) {
        loseSound.play ();
        alert(wordGen + " - You Lose!");
        //reload resources
        document.location.reload(false);
    }
}
    //display active variables and arrays on screen
    document.querySelector(".underscoresArea").innerHTML = wordUnderscore.join(" ");
    document.querySelector(".rightGuessArea").innerHTML = rightGuesses.join(" ");
    document.querySelector(".wrongGuessArea").innerHTML = wrongGuesses.join(" ");
    document.querySelector(".winsCount").innerHTML = winCount;
    document.querySelector(".remainingGuessesArea").innerHTML = remainingGuesses - wrongGuesses.length;
});  

//on button click get hint and lose a guess
$(".getHintButton").click(function() {
    hintSound.play ();
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