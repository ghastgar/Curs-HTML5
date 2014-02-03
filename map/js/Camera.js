
// Camera.js

function Camera(x, y) {
	this.pos = new Pos(x, y);
	this.speed = 500;
}

Camera.prototype = {
	logic : function (dt) {
		if (kb.char('W')) this.pos.y -= this.speed*dt;
		if (kb.char('S')) this.pos.y += this.speed*dt;
		if (kb.char('A')) this.pos.x -= this.speed*dt;
		if (kb.char('D')) this.pos.x += this.speed*dt;
	},
	focusOnContext : function (ctx) {
		//ajustem el canvas a la posició de la càmera
		ctx.translate(-(this.pos.x-canvas.width/2), -(this.pos.y-canvas.height/2));
	}
}