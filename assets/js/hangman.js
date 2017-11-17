var hangman = {
  words = [ "elves", "santa", "rudolph", "presents", "winter", "snow" ],
  word: "",
  guesses: 6,
  wordsCorrect: 0,
  displayWord: function() {
    var blank = document.createElement("p");
    var blanks = document.createTextNode("_ ");
    blank.appendChild(blanks);

    var wrongBox =  document.getElementById("wrong-letter-box");
    wrongBox.appendChild(blank); n

  },
  lose: function(){
    alert("You lose. Refresh the Page and Try Again!");
  },
  start: function() {
    while (wordsCorrect > 6) {

  }
},

};
// Loops through words
// $(document).ready(function() {
// });
