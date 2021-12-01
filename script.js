var wins = "Wins";
var Tie = "Draw";
var Lost = "Lost";

var options = ["R", "P", "S"];

function playGame() {
  var play = window.prompt("Please enter R, P, S");
  if (!play) {
    window.prompt("goodbye");
  }
}

var index = math.floor(math.random() * options.length);
var computer = options[index];

windows.alert(computer);

if (play === computer) {
  windows.alert("Its a tie");
} else if (
  (play === "R" && computer === "S") ||
  (play === "P" && computer === "R") ||
  (play === "S" && computer === "P")
) {
  windows.alert("you win");
} else {
  windows.alert("you lost");
}

playGame();
