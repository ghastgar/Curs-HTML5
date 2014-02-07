// sBall.js

var config = require('./sConfig');

function Ball() {
	this.x = 300;//Math.random()*(config.MAP_WIDTH-4*config.MARGIN)+ 2*config.MARGIN;
	this.y = 300;//Math.random()*(config.MAP_HEIGHT);
	this.vx = 80;
	this.vy = 100*(Math.random())-25;
	this.edge = 22;
	this.color = 'red';
}

module.exports = Ball;