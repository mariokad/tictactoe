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

Game.prototype.move = function(row, col) {
  console.log('in move', row, col);
  this.board[row - 1][col - 1] = 'X';
  console.log('board', this.board);
};

Game.prototype.promptUser = function() {
  var row,
      col,
      context = this;
  reader.question('Place your mark as: row, column?',
    function(userInput) {
      userInput = userInput.split(',');
      row = userInput[0];
      col = userInput[1];
      context.move(row, col);
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

var tictac = new Game();
tictac.play();