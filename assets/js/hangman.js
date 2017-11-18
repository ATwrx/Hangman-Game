$(document).ready(function(){
  $(document).keypress(function(key) {
      $("#pregame-message").hide();
      var letter = String.fromCharCode(key.which);
      guessLetter(letter);
  });

  var words = [ "elves", "santa", "rudolph", "presents", "winter", "snow" ];
  var selectedWord;
  // The word in the array selected by chooseRandomWord method.
  var guessedLetter;
  // The last key pressed
  var guessFields = [];
  // The "_ _ _ _" section
  var guesses = 6;

  function chooseRandomWord() {
    var randomIndex =  Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex];
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
      } else {
        guesses--;
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
        $("#guess-message").text("NICE GUESS!");
        updateGuessFields(letter);
        }
      }
    }
  chooseRandomWord();
});
  // Make the "#start" button call the "startGame" method on click.
  // Make the "#guess" button call the "guessLetter" method on click.
