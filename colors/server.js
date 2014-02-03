var io = require('socket.io').listen(4242);
io.set('log level', 1);

var players = {};

function Player (id) {
	this.id = id;
	this.score = 0;
	this.name = "";
}

var nowPlaying = false;

function sendColor(color) {
		io.sockets.emit('newColor', color);
}

function randomColor() {
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function loop () {
	sendColor("#FFFFFF");
	var t = Math.random()*5500;
	setTimeout(function() {
		nowPlaying = true;
		sendColor(randomColor());
	}, t);
}


io.sockets.on('connection', function (socket) {

	// envia la llista de cubs actual al nou player
	for (var playerId in players) {
		socket.emit('playerUpdate', players[playerId]);
	}

	loop();

	// quan algu es connecta i introdueix un nom 
	// es crea el nou player i l'envia a tots
	socket.on('newUsername', function(username) {
		var player = new Player (socket.id);
		player.name = username;
		players[socket.id] = player;
		io.sockets.emit('playerUpdate', player);
	});

	// comprovacions quan un jugador prem l'spacebar 
	socket.on('hit', function () {
		var player = players[socket.id];
		if (player !== undefined) {
			if (nowPlaying) {
				nowPlaying = false;
				player.score += 10;
				loop();
			}
			else player.score -= 5;
			players[socket.id] = player;
			io.sockets.emit('playerUpdate', player);
		}
	});

	socket.on('disconnect', function() {
		console.log(socket.id + " has disconnected from the server :/");
		delete players[socket.id];
		io.sockets.emit('playerDisconnect', socket.id);
	});
})
