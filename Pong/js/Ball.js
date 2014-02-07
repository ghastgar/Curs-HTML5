// Ball.js

function Ball () {
	this.x;
	this.y;
	this.vx;
	this.vy
	this.edge;
	this.index;
	this.color;
}

Ball.prototype.logic = function(dt) {
	this.x += this.vx*dt;
	this.y += this.vy*dt;
	if (this.x <= 0) {
		this.x = 0;
		this.vx = 0;
		this.vy = 0;
	}
	if (this.x+this.edge >= MAP_WIDTH) {
		this.x = MAP_WIDTH-this.edge;
		this.vx = 0;
		this.vy = 0;
	}
	if (this.y <= 0) {
		this.y = 0;
		this.vy*=-1;
	}
	else if (this.y+this.edge >= MAP_HEIGHT) {
		this.y = MAP_HEIGHT-this.edge;
		this.vy*=-1;
	}
}

Ball.prototype.render = function(ctx) {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.edge, this.edge);
}

Ball.prototype.hitTestWith = function(players, ballIndex) {
	for (var i = 0; i < players.length; ++i) {
		if (players[i] !== undefined) {
			player = players[i];
			if (i === 0){
				if (this.x <= player.x+player.w) {
					if (this.y+this.edge >= player.y && 
						this.y <= player.y+player.h) {
						if (player.id === socket.id) {
							//this.v*= -1;
							socket.emit('ballHit', i);
						}
					}
				}
			}
			else if (i === 1) {
				if (this.x+this.edge >= player.x) {
					if (this.y+this.edge >= player.y && 
						this.y <= player.y+player.h) {
						this.v*= -1;
						if (player.id === socket.id) {
							//this.v*=-1;
							socket.emit('ballHit', i);
						}
					}
				}
			}
		}
	}
}

Ball.prototype.updateWithData = function(data) {
	if (data.x !== undefined) {
		this.x = data.x;
		this.y = data.y;
		this.vx = data.vx;
		this.vy = data.vy;
		this.edge = data.edge;
		this.color = data.color;
	}
}