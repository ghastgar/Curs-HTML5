// server.js

var io = require('socket.io').listen(8080);
io.set('log level', 1);

var Player = require('./js/sPlayer');
var Ball = require('./js/sBall');

var players = [];
var ball = new Ball();

function getIndex(playerId) {
	for (var i = 0; i < 2; ++i) 
		if (players[i].id === playerId)
			return i;
	return undefined;
}

io.sockets.on('connection', function (socket) {

	// envia els jugadors actuals (<=2) a la nova connexió
	for (var i = 0; i < players.length; ++i) {
		socket.emit('playerUpdate', players[i]);
		io.sockets.emit('ballUpdate', ball);
	}

	//si encara no hi ha dos jugadors, en creem un i l'enviem
	var newPlayer = false;
	var player;
	if (players.length === 0) {
		player = new Player(0, socket.id);
		players[0] = player;
		newPlayer = true;
	}
	else if (players.length === 1) {
		player = new Player(1, socket.id);
		players[1] = player;
		newPlayer = true;
	}
	else newPlayer = false;
	if (newPlayer) {
		io.sockets.emit('playerUpdate', player);
		console.log(players.length);
	}
	socket.on('playerMove', function (ind, newY) {
		//ens assegurem que ho hagi enviat el client que és
		//jugador, actualitzem la posició del player al server
		//i l'enviem a tots els altres connectats
		if (players[ind].id === socket.id) {
			players[ind].y = newY;
			socket.broadcast.emit('playerUpdate', data = {index: ind, y: newY});
		}
	});

	var lastHit = +new Date();
	var hitCount = 0;

	socket.on('ballHit', function(plInd) {
		++hitCount;
		
		var now = +new Date();
		if (now-lastHit > 200) {
			//var newV = players[plInd].v;
			//newV += 20;
			//io.sockets.emit('playerUpdate', {index: plInd, v: newV});
			ball.vx *= -1;
			//if (ball.vx < 0) ball.vx -= 20;
			//else ball.vx += 20;
			io.sockets.emit('changeBallDir');
		}
		lastHit = now;
		/*if (hitCount === 5) {
			setTimeOut (function() {
				hitCount = 0;
				io.sockets.emit('ballUpdate', ball);
			}, 200);
		}*/
	});

	socket.on('disconnect', function() {
		console.log('Player '+socket.id+' has disconnected from the server.');
		var index = getIndex(socket.id);
		delete players[index];
		io.sockets.emit('playerDisconnect', index);
	});

});