// server.js

var io = require('socket.io').listen(8080);
io.set('log level', 1);

var Pos = require('./js/sPos');
var Cell = require('./js/sCell');
var Map = require('./js/sMap');
var Player = require('./js/sPlayer');

var players = {};
var map = new Map();

io.sockets.on('connection', function (socket) {

	var player = new Player(socket.id);
	map.players[socket.id] = player;
	if (player.x === undefined || player.y === undefined) player.newPos();

	io.sockets.emit('playerUpdate', player);

	socket.on('moveRequest', function(playerId, pos) {
		if (map.getCellAtPos(pos).playerId === undefined) {

		}
	});
});