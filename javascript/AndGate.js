var AndGate = (function (_super) {
	__extends(AndGate, _super);
    function AndGate(pPosition) {
		_super.call(this);
    }
    
	AndGate.prototype.draw = function (context) {
		context.save();
		{
			context.beginPath();
			context.moveTo(0, 0);
			context.lineTo(0, 10);
			context.moveTo(0,80);
			context.lineTo(0,100);
			
			context.moveTo(50, 80);
			context.arc
			(
				0,
				60,
				50,
				0,
				Math.PI,
				true
			);
			
			context.lineTo(-50, 80);
			context.lineTo(50, 80);
			
			context.stroke();
		}
		context.restore();
    };
	
    
	
    return AndGate;
})(FaultTreeGate);
