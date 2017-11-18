$(document).ready(function(){
  var words = [ "elves", "santa", "rudolph", "presents", "winter", "snow" ];
  var selectedWord;
  // The last key pressed
  var guessFields = [];
  // The "_ _ _ _" section
  var guesses = 6;
  var correctGuesses = 0;

  $(document).keypress(function(key) {
      $("#pregame-message").hide();
      var letter = String.fromCharCode(key.which);
      guessLetter(letter);
      if (guesses == 0) {
        alert("You lose, try again.");
        location.reload();
      } else if (correctGuesses == selectedWord.length) {
        alert("YOU WIN!! The word is " + selectedWord);
        location.reload();
      }
  });







  function chooseRandomWord() {
    var randomIndex =  Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
    numOfLetters = selectedWord.length;
    initializeGuessFields();
  }

  function initializeGuessFields() {
    wordArray().forEach(function(letter) {
      letterField = "_";
      guessFields.push(letterField);
    })
    fields = guessFields.toString().replace(/,/g, " ");
    $("#word-format").text(fields);

  }

  function updateGuessFields(guessedLetter) {
    wordArray().forEach(function(letter) {
      if (guessedLetter == letter) {
        guessFields[i] = letter;
      }
    })
    fields = guessFields.toString().replace(/,/g, " ");
    $("#word-format").text(fields);

  }

  function wordArray() {
    return selectedWord.split('');
  }

  function guessLetter(letter) {
    var letters = wordArray()
    for (i = 0; i < letters.length; i++) {
      if (letter == letters[i]) {
        updateGuessFields(letter);
        correctGuesses++;
      }
    }
    if ($.inArray(letter, letters) == -1){
      guesses--;
      $("#guesses").text(guesses);
    }
  }
    chooseRandomWord();
});
  // Make the "#start" button call the "startGame" method on click.
  // Make the "#guess" button call the "guessLetter" method on click.
