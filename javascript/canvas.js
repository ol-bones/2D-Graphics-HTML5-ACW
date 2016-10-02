var Canvas = (function()
{
	function Canvas()
	{
		console.info("Canvas object created");
	};
	
	return Canvas;
})();

Canvas.prototype.onResize = function()
{
	if(MainCanvas.canvas)
	{
		if(MainCanvas.fitCanvasCheckBox.checked)
		{
			MainCanvas.canvas.width = window.innerWidth;
			MainCanvas.canvas.height = window.innerHeight;
		}
		else
		{
			MainCanvas.canvas.width = screen.width;
			MainCanvas.canvas.height = screen.height;
		}
	}
	MainCanvas.panHandler.changed = true;
};

Canvas.prototype.initialise = function()
{
	this.canvas = document.getElementById('canvas');
	this.bufferCanvas = document.createElement("canvas");
	if(!this.canvas)
	{
		alert('Err: no canvas element');
		return;
	}
	if(!this.canvas.getContext)
	{
		alert('Err: no canvas getcontext()');
		return;
	}
	this.context = this.canvas.getContext('2d');
	this.bufferContext = this.bufferCanvas.getContext('2d');
	if(!this.context)
	{
		alert('Err: failed to get context');
		return;
	}
	
	
	
	this.bufferCanvas.width = window.innerWidth;
	this.canvas.width = window.innerWidth;
	this.bufferCanvas.height = window.innerHeight;
	this.canvas.height = window.innerHeight;
	
	this.minimapCheckBox = document.getElementById("mmcheckbox");
	this.fitCanvasCheckBox = document.getElementById("cvssizechbx");
	
	this.instructionsBox = document.getElementById('instructionsdiv');
	this.instructionsbackground = document.getElementById('instructionsbackdiv');
	
	this.hideInstructions();
	
	this.panHandler = new PanHandler();
	var self = this;
	this.treeViewer = new TreeViewer
	(
		function()
		{
			self.draw();
			self.update();
		}
	);
};


Canvas.prototype.draw = function()
{
	MainCanvas.canvas.width = MainCanvas.canvas.width; 
	if(MainCanvas.treeViewer)
	{
		// if the tree has changed at all, redraw it to the tree buffer
		if(MainCanvas.panHandler.changed) 
		{ 
			MainCanvas.treeViewer.draw(MainCanvas.bufferContext, MainCanvas.canvas, MainCanvas.bufferCanvas); 
		}

		// redraw the tree buffer
		MainCanvas.drawTreeBuffer(MainCanvas.context, MainCanvas.bufferCanvas);
		
		// if minimap is toggled, draw minimap buffer
		if(MainCanvas.minimapCheckBox && MainCanvas.minimapCheckBox.checked)
		{
			MainCanvas.drawMinimapBuffer(MainCanvas.context, MainCanvas.canvas, MainCanvas.bufferCanvas);
		}
	}
	requestAnimationFrame(MainCanvas.draw);
};

Canvas.prototype.drawTreeBuffer = function(context, bufferCanvas)
{
	var currentTree = this.treeViewer.Tree.mFaultTrees[ this.treeViewer.Tree.mCurrentFaultTreeIndex ];
	context.save();
	{
		context.translate(this.panHandler.getX(), this.panHandler.getY());
		context.scale(this.panHandler.scale, this.panHandler.scale);
		context.translate(-(currentTree.getTotalEnds()*100)/2, -(currentTree.getDepth()*100)/2);
		context.drawImage(bufferCanvas, 0, 0, bufferCanvas.width, bufferCanvas.height);
	}
	context.restore();
};

Canvas.prototype.drawMinimapBuffer = function(context, canvas, bufferCanvas)
{
	context.save();
	{
		context.scale(0.3, 0.3);
		context.translate(canvas.width*0.1, canvas.height*0.1);
		context.save();
		{
			context.save();
			{
				context.globalAlpha=0.8;
				context.fillStyle="#FFFFFF";
				context.lineWidth = 7;
				context.shadowBlur = 10;
				context.shadowColor = "#000000";
				context.fillRect(0,0, canvas.width, canvas.height);
			}
			context.restore();
			context.setCompositeOperation = 'source-atop';
			
			context.rect(0,0, canvas.width, canvas.height);
			context.stroke();
			context.clip();
			
			context.scale(1/this.panHandler.scale, 1/this.panHandler.scale);	
			context.translate(-this.panHandler.getX(), -this.panHandler.getY());
			context.rect(0,0,canvas.width, canvas.height);
			
			context.stroke();
		}
		context.restore();
		context.drawImage(bufferCanvas, 0, 0, canvas.width, canvas.height);
	}
	context.restore();
};

Canvas.prototype.update = function()
{
	if(MainCanvas.panHandler)
	{
		MainCanvas.panHandler.update();
	}
	setTimeout(MainCanvas.update, 1000/60);
};

Canvas.prototype.showInstructions = function()
{
	this.instructionsBox.hidden = false;
	this.instructionsbackground.hidden = false;
};

Canvas.prototype.hideInstructions = function()
{
	this.instructionsBox.hidden = true;
	this.instructionsbackground.hidden = true;
};