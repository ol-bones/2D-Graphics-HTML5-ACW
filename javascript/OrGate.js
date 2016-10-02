var OrGate = (function (_super) {
	__extends(OrGate, _super);
    function OrGate(pPosition) {
		_super.call(this);
    }
    
	OrGate.prototype.draw = function (context) {
		context.save();
		{
			var pointBottomLeft = new Vector(-50,80);
			var pointBottomRight = new Vector(50,80);
			
			var pointBottomMid = new Vector(0, 80);
			var pointBottomMid2 = new Vector(0, 100);
			
			var pointTop = new Vector(0, 0);
			var pointTop2 = new Vector(0, 10);
			
			context.beginPath();
			context.moveTo(pointTop.getX(), pointTop.getY());
			context.lineTo(pointTop2.getX(), pointTop2.getY());
			context.moveTo(pointBottomMid.getX(), pointBottomMid.getY());
			context.lineTo(pointBottomMid2.getX(), pointBottomMid2.getY());
			
			context.moveTo(pointBottomLeft.getX(), pointBottomLeft.getY());
			context.bezierCurveTo
			(
				pointBottomLeft.getX() + 20,
				pointBottomLeft.getY() - 60,
				pointBottomLeft.getX() + 40,
				pointBottomLeft.getY() - 60,
				pointTop2.getX(),
				pointTop2.getY()
			);
			
			context.moveTo(pointBottomRight.getX(), pointBottomRight.getY());
			context.bezierCurveTo
			(
				pointBottomRight.getX() - 20,
				pointBottomRight.getY() - 60,
				pointBottomRight.getX() - 40,
				pointBottomRight.getY() - 60,
				pointTop2.getX(),
				pointTop2.getY()
			);
			
			context.moveTo(pointBottomLeft.getX(), pointBottomLeft.getY());
			context.bezierCurveTo
			(
				pointBottomMid.getX() - 10,
				pointBottomMid.getY() - 10,
				pointBottomMid.getX() + 10,
				pointBottomMid.getY() - 10,
				pointBottomRight.getX(),
				pointBottomRight.getY()
			);
			context.stroke();
		}
		context.restore();
    };
	
    
	
    return OrGate;
})(FaultTreeGate);
