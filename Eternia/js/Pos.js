
// Pos.js

function Pos(x,y) {
		if (x === undefined) this.x = 0;
		else this.x = x;
		if (y === undefined) this.y = 0;
		else this.y = y;
}

Pos.prototype.newPos = function() {
	return new Pos(Math.floor(Math.random*canvas.width/CELL_EDGE), Math.floor(Math.random*canvas.height/CELL_EDGE));
}

// returns the string indicating its position in the form "0x1"
Pos.prototype.getIndex = function() {
	return this.x + "x" + this.y;
}

//overwrites the function toString in order to follow the format XxY
Pos.prototype.toString = function() {
	return this.getIndex();
}

Pos.prototype.clone = function() {
	return new Pos(this.x, this.y);
}