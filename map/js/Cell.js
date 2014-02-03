
// Cell.js

var CELL_EDGE = 50;
var water = '#18598B';

function Cell() {

	this.color = this.colors[Math.floor(Math.random()*this.colors.length)];
	this.genBuffer();
}

Cell.prototype = {
	colors : ['#3A4511', '#465E17', '#205E17', '#6F721D', water]
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
/*
Cell.prototype.getPos = function(index) {
	var x = parseInt(index,10);
	var i = 0;
	var y = '0'; 
	while(index[i] !== 'x' and i < index.length) {
		++i;
	}
	var y = parseInt(index,10);
	return new Pos(x, y);
}
*/

// parseInt("3x4",10) = 3
// parseInt("0x4",10) = 0
var k = 0;
for (var i = 0; i < maps.length; ++i) ++k;
console.log(k);