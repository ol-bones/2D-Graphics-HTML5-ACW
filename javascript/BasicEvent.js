var BasicEvent = (function (_super) {
	__extends(BasicEvent, _super);
    function BasicEvent(pPosition) {
		_super.call(this);
    }
    BasicEvent.prototype.draw = function (context) {
		context.beginPath();
		context.moveTo(0, 0);
		context.lineTo(0, 10);
		context.stroke();
		this.drawCircle(context,60);
    };
	

    return BasicEvent;
})(FaultTreeNode);
