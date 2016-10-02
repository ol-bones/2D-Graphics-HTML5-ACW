var TransferGate = (function (_super) {
	__extends(TransferGate, _super);
    function TransferGate(pPosition) {
		_super.call(this);
    }
    TransferGate.prototype.draw = function (context) {
		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(0, 10);
		context.stroke();
		context.save()
		{
			context.translate(30,10);
			context.rotate(Math.PI/6);
			this.drawCircle(context,3);
		}
		context.restore();
    };
	
    return TransferGate;
})(FaultTreeNode);
