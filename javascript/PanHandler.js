var PanHandler = (function () 
{
	this.pan;
	this.scale;
	this.mouseClicked;
	this.changed;
	
	function PanHandler()
	{
		this.pan = new Vector(0,0);
		this.scale = 1;
		this.interpScale = 1;
		this.scalePercent = 0;
		this.zooming = false;
		this.changed = true;
		MainCanvas.canvas.addEventListener('mousedown', this.onMouseDown, false);
		MainCanvas.canvas.addEventListener('mouseup', this.onMouseUp, false);
		MainCanvas.canvas.addEventListener('mousemove', this.onMouseMove, false);
		MainCanvas.canvas.addEventListener('mousewheel', this.onMouseWheel, false);
	}
	
	return PanHandler;
})();

PanHandler.prototype.getX = function()
{
	return this.pan.getX();
};

PanHandler.prototype.getY = function()
{
	return this.pan.getY();
};

PanHandler.prototype.update = function()
{
	if(this.zooming)
	{
		var scaleDiff = this.interpScale - this.scale;
		if(this.scalePercent > 0.99)
		{
			this.zooming = false;
			this.scalePercent = 0;
			this.scale = this.interpScale;
		}
		else
		{
			this.scalePercent+= 0.01;
			this.scale += scaleDiff*this.scalePercent;
		}
	}
};


PanHandler.prototype.fitToScreen = function()
{
	MainCanvas.panHandler.zooming = true;
	MainCanvas.panHandler.scalePercent = 0;
	var longest;
	var screenSide;
	var treeSize = new Vector(
		MainCanvas.treeViewer.Tree.getCurrentFaultTree().getTotalEnds()+3, 
		MainCanvas.treeViewer.Tree.getCurrentFaultTree().getDepth()+3
	);
	if(Math.max(treeSize.getX(), treeSize.getY()) === treeSize.getX())
	{
		longest = treeSize.getX();
		screenSide = canvas.width;
	}
	else
	{
		longest = treeSize.getY();
		screenSide = canvas.height;
	}
	MainCanvas.panHandler.interpScale = 1/((longest*100)/screenSide);
};

PanHandler.prototype.reset = function()
{
	this.pan.set(0,0);
	this.scale = 1;
	this.interpScale = 1;
	this.scalePercent = 0;
	this.zooming = false;
};

PanHandler.prototype.onMouseDown = function(evt)
{
	MainCanvas.panHandler.mouseClicked = true;
};

PanHandler.prototype.onMouseUp = function(evt)
{
	MainCanvas.panHandler.mouseClicked = false;
};

PanHandler.prototype.onMouseMove = function(evt)
{
	if(MainCanvas.panHandler.mouseClicked)
	{
		MainCanvas.panHandler.changed = true;
		MainCanvas.panHandler.pan = MainCanvas.panHandler.pan.add(new Vector(evt.webkitMovementX, evt.webkitMovementY));
	}
};

PanHandler.prototype.onMouseWheel = function(evt)
{
	evt.preventDefault();
	if(MainCanvas.panHandler.interpScale + (evt.wheelDelta/1000) > 0)
	{
		MainCanvas.panHandler.changed = true;
		MainCanvas.panHandler.zooming = true;
		MainCanvas.panHandler.scalePercent = 0;
		MainCanvas.panHandler.interpScale += evt.wheelDelta/1000;
	}
};