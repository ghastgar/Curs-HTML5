
// Cell.js

var CELL_EDGE = 50;
var water = '#18598B';

function Cell() {

	this.color = this.colors[Math.floor(Math.random()*this.colors.length)],
	this.genBuffer();
}

Cell.prototype = {
	colors : ['#3A4511', '#465E17', '#205E17', '#6F721D', water],
	playerId : undefined
}

Cell.prototype.genBuffer = function(ctx) {
	var buffer = document.createElement('canvas');
	buffer.width = CELL_EDGE;
	buffer.height = CELL_EDGE;
	var bufferCtx = buffer.getContext('2d');
	bufferCtx.fillStyle = this.color;
	bufferCtx.fillRect(0, 0, CELL_EDGE, CELL_EDGE);

	this.buff = buffer;
}
