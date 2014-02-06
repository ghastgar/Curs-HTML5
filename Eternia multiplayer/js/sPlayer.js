// server Player

var colors = ['#682F8E', 'red', '#FF2ED2', '#001975', '#6BFFB3', 'yellow'];

function Player(id) {
	this.id = id;
	this.color = [Math.floor(Math.random()*colors.length)];
	this.x = undefined;
	this.y = undefined;
}

Player.prototype.playerUpdate = function(player) {
	this.x = player.x;
	this.y = player.y;
	this.color = player.color;
}

Player.prototype.newPos = function() {
	this.x = Math.floor(Math.random()*5);
	this.y = Math.floor(Math.random()*5);
}

module.exports = Player;