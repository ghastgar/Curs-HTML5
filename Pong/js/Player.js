// player.js

function Player () {
	this.x;
	this.y;
	this.v;
	//this.a = 150;
	this.id;
	this.index;
	this.color;
}

Player.prototype = {
	w: 20,
	h: 80,
}

Player.prototype.updateWithData = function(data) {
	if (this.color === undefined) {
		this.color = data.color;
		this.id = data.id;
		this.index = data.index;
		this.x = data.x;
		this.v = data.v;
	}
	this.y = data.y;	
}

Player.prototype.logic = function(dt) {
	
	var oldY = this.y;

	if (kb.char('W')) {
		this.y -= this.v*dt;
		//this.v += this.a*dt;
	}
	else if (kb.char('S')) {
		this.y += this.v*dt;
		//this.v += this.a*dt;
	}
	else {
		//this.v = 200;
	}
	if (this.y < 0) this.y = 0;
	else if (this.y+this.h > canvas.height) this.y = canvas.height-this.h;

	if (oldY !== this.y) socket.emit('playerMove', this.index, this.y);
}

Player.prototype.render = function (ctx) {
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.y, this.w, this.h)
}