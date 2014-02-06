// sPlayer.js

var MARGIN = 80;
var MAP_WIDTH = 1200;
var MAP_HEIGHT = 650;

function Player(index, id) {
	this.id = id;
	this.index = index;
	this.x;
	if (index === 0) this.x = MARGIN;
	else if (index === 1) this.x = MAP_WIDTH-MARGIN-this.w;
	this.y = Math.floor(MAP_HEIGHT/2 - this.h/2);
	this.v =400;
	this.color = '#'+Math.floor(Math.random()*16777215).toString(16)
}

Player.prototype = {
	w: 20,
	h: 80,
}

module.exports = Player;