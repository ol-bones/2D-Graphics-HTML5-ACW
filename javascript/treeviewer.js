var TreeViewer = (function()
{
	function TreeViewer(callback)
	{
		this.mouseClicked = false;
		this.fit = false;
		
		this.Tree = new ExampleFaultTrees();
		
		callback();
	};
	
	return TreeViewer;
})();

TreeViewer.prototype.draw = function(context, canvas, bufferCanvas)
{
	var curTree = this.Tree.mFaultTrees[ this.Tree.mCurrentFaultTreeIndex ];

	bufferCanvas.width = canvas.width + (curTree.getTotalEnds()*100);
	bufferCanvas.height = canvas.height + (curTree.getDepth()*100);
	context.save();
	{
		context.lineWidth = 7;
		context.translate(bufferCanvas.width/2, bufferCanvas.height/2);
		curTree.drawChildren(context);
	}
	context.restore();
	MainCanvas.panHandler.changed = false;
	return bufferCanvas;
};

TreeViewer.prototype.nextTree = function()
{
	this.Tree.incrementCurrentFaultTreeIndex(); 
	MainCanvas.panHandler.changed = true;
	MainCanvas.panHandler.reset();
};

TreeViewer.prototype.previousTree = function()
{
	this.Tree.decrementCurrentFaultTreeIndex(); 
	MainCanvas.panHandler.changed = true;
	MainCanvas.panHandler.reset();
};