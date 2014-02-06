// game.js

function Game() {
	this.players = [];
}

Game.prototype.getPlayer(x) {
	if (x !== undefined) return players[x+1];
}