var Game = function() {
  this.board = [
  ['', '', ''], 
  ['', '', ''], 
  ['', '', '']
  ];
  this.player1 = true;
  this.player2 = false;
};

var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Game.prototype.promptUser = function() {
  reader.question('Where would you like to place your mark (in the format: row, column)?',
    function(userInput) {
      console.log('userInput', userInput);
    });
}

Game.prototype.play = function() {
  this.promptUser();
};

// Game.prototype.turn = function() {
//   if (this.player1 === true) {
//     this.player1 = !this.player1;
//     this.player2 = !this.player2;
//   } else if (this.player2 === true) {
//     this.player2 = !this.player2;
//     this.player1 = !this.player1;
//   }
// };

Game.prototype.move = function(row, col) {

};

var tictac = new Game();
tictac.play();