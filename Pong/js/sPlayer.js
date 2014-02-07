// sPlayer.js

var config = require('./sConfig');

function Player(index, id) {
	this.id = id;
	this.index = index;
	this.x;
	if (index === 0) this.x = config.MARGIN;
	else if (index === 1) this.x = config.MAP_WIDTH-config.MARGIN-this.w;
	this.y = 0;//Math.floor(config.MAP_HEIGHT/2 - this.h/2);
	this.v = 400;
	this.color = '#'+Math.floor(Math.random()*16777215).toString(16);
}

Player.prototype = {
	w: 20,
	h: 80,
}

module.exports = Player;