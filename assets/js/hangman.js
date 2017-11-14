$(document).ready(function() {

  $(".hide-me").click(function() {
    // Hides the instructions after the first key press
      $(this).hide(1000);
      $("#hide").hide(1000);
      console.log("I hear ya");
  });

  var words = [
    "elves",
    "santa",
    "rudolph",
    "presents",
    "winter",
    "snow"
  ];
  var guesses = 5; // nd. turn into counter  function
  var wins = 0; // nd. turn into counter function
});
