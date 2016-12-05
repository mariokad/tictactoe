var Game = function() {
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.turn = false;
};

Game.prototype.start = function() {
  return this.board;
};

var tictac = new Game();

console.log(tictac.start());