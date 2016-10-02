var Vector = (function()
{
	this.X = 0;
	this.Y = 0;
	
	function Vector(x,y)
	{
		this.setX(x);
		this.setY(y);
	};
	
	return Vector;
})();

Vector.prototype.set = function(x,y)
{
	this.setX(x);
	this.setY(y);
};

Vector.prototype.getX = function()
{
	return this.X;
};

Vector.prototype.setX = function(x)
{
	this.X = x;
};

Vector.prototype.getY = function()
{
	return this.Y;
};

Vector.prototype.setY = function(y)
{
	this.Y = y;
};

Vector.prototype.add = function(v2)
{
	var tempX = (this.getX() + v2.getX());
	var tempY = (this.getY() + v2.getY());
	
	return new Vector(tempX, tempY);
}

Vector.prototype.sub = function(v2)
{
	var tempX = (this.getX() - v2.getX());
	var tempY = (this.getY() - v2.getY());
	
	return new Vector(tempX, tempY);
};

Vector.prototype.div = function(scalar)
{
	var tempX = (this.getX()/scalar);
	var tempY = (this.getY()/scalar);
	
	return new Vector(tempX, tempY);
};

Vector.prototype.mul = function(scalar)
{
	var tempX = (this.getX()*scalar);
	var tempY = (this.getY()*scalar);
	
	return new Vector(tempX, tempY);
};

Vector.prototype.mag = function()
{
	var h = Math.pow(this.getX(), 2) + Math.pow(this.getY(), 2);
	return Math.sqrt(h);
};

Vector.prototype.nor = function()
{
	return new Vector(this.getX()/this.mag(), this.getY()/this.mag());
};

Vector.prototype.dot = function(v2)
{
	return ((this.getX()*v2.getX()) + (this.getY()*v2.getY()));
};

Vector.prototype.ang = function(v2)
{
	return Math.acos(this.dot(v2)/(this.mag() * v2.mag()));
};

Vector.prototype.rotate = function(degrees)
{
};