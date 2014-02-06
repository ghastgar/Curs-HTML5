// server Cell
var water = '#18598B';
var colors = ['#3A4511', '#465E17', '#205E17', '#6F721D', water];

function Cell() {
	this.color = colors[Math.floor(Math.random()*colors.length)];
}

Cell.prototype = {
	playerId : undefined
}

module.exports = Cell;