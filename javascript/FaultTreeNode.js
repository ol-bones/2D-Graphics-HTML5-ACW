var FaultTreeNode = (function () {
	
    function FaultTreeNode() {
        this.setId(FaultTreeNode.sTotalNodes++);
    }
	FaultTreeNode.sTotalNodes = 0;
    FaultTreeNode.prototype.getId = function () {
        return this.mId;
    };
    FaultTreeNode.prototype.setId = function (pId) {
        this.mId = pId;
    };
	FaultTreeNode.prototype.draw = function () {
    };
	FaultTreeNode.prototype.setupPosition = function (pPosition) {
		this.position = new Vector(pPosition.getX(), pPosition.getY());
	};
    
	
    return FaultTreeNode;
})();

FaultTreeNode.prototype.drawCircle = function(context, sides)
{
	context.save();
	{
		var numSegments = sides;
		var centre = new Vector(0, 60);
		var radius = 50;

		var anglePerSegment = Math.PI * 2 / numSegments;

		context.moveTo(centre.getX()+radius,centre.getY());
		for(var i = 0; i <= numSegments; i++)
		{
			var angle = anglePerSegment * i;
			var circumferenceVector = new Vector(
				centre.getX() + radius * Math.cos(angle), 
				centre.getY() + radius * Math.sin(angle)
			);
			context.lineTo(circumferenceVector.getX(),circumferenceVector.getY());
		}
		context.stroke();
	}
	context.restore();
};