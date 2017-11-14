var words = [
  "elves",
  "santa",
  "rudolph",
  "presents",
  "winter",
  "snow"
];
var guesses = 5; // nd. turn into counter function
var wins = 0; // nd. turn into counter function
$(document).ready(function() {

  $(".hidden-start").keydown(function() {
    // Hides the instructions after the first key press
      $(this).hide();
      console.log("I hear ya");
  })
});
