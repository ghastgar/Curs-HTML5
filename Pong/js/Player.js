// player.js

var p1Img = new Image();
p1Img.src="images/paddleBlu.png";
var p2Img = new Image();
p2Img.src="images/paddleRed.png";
//images by Kenney from kenney.nl

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
		if (this.index === 0) this.img = p1Img;
		else if (this.index = 1)this.img = p2Img;
	}
	if (data.y !== undefined) this.y = data.y;	
	if (data.v !== undefined) this.v = data.v;
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
	//ctx.fillStyle = this.color;
	//ctx.fillRect(this.x, this.y, this.w, this.h);
	ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}