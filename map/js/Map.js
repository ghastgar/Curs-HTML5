
// Map.js

function Map() {
	this.cells = {};
}

Map.prototype.getCellAt = function(pos) {

	var cell = this.cells[pos];

	if (cell === undefined) {
		cell = new Cell();
		this.cells[pos] = cell;
	}

	return cell;
}

Map.prototype.clearBounds = function(from, to) {

	for (var index in this.cells) {
		var cell = this.cells[index];

		var cPos = cell.getPos(index);

		if (cell.x < from.x || cell.y < from.y || 
			cell.x > to.x || cell.y > to.y) {
			console.log('aqui estic');
			delete this.cells[cellPos];
		}
	}
}