
// Camera.js

function Camera(x, y) {
	this.pos = new Pos(x, y);
	this.targetPos = this.pos.clone();
}

Camera.prototype = {

	logic : function (dt, speed) {
		this.pos.x += (this.targetPos.x - this.pos.x)/(speed*dt);
		this.pos.y += (this.targetPos.y - this.pos.y)/(speed*dt);
	},
}

Camera.prototype.focusOnContext = function (ctx) {
	//ajustem el canvas a la posició de la càmera
	ctx.translate(-(this.pos.x-canvas.width/2), -(this.pos.y-canvas.height/2));
}