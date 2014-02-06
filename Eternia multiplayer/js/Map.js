
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

Map.prototype.movePlayerToPos = function(player, pos) {
	var oldPos = player.pos;
	if (oldPos !== undefined) {
		var oldCell = this.getCellAt(oldPos);
		oldCell.playerId = undefined;
		this.getCellAt(pos).playerId = player.id;
		player.pos.x = CELL_EDGE*pos.x;
		player.pos.y = CELL_EDGE*pos.y;
	}	
}