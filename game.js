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

Game.prototype.mark = function(row, col) {
  this.board[row - 1][col - 1] = 'X';
};

Game.prototype.detectWin = function () {
  // TODO
};

Game.prototype.nextMove = function () {
  // this.detectWin();
};

// need detection function to go with nextMove in order to detect a win

Game.prototype.promptUser = function() {
  var row,
      col,
      context = this;
  reader.question('Place your mark as: row, column',
    function(userInput) {
      userInput = userInput.split(',');
      row = userInput[0];
      col = userInput[1];
      context.mark(row, col);
    });
};

Game.prototype.play = function() {
  this.promptUser();
};

var tictac = new Game();
tictac.play();