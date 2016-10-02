var FaultTreeGate = (function (_super) {
	__extends(FaultTreeGate, _super);
	
	
    function FaultTreeGate(pPosition) {
		_super.call(this);
        this.mChildren = new Array();
    }
    FaultTreeGate.prototype.getChild = function (pIndex) {
        return this.mChildren[pIndex];
    };
	FaultTreeGate.prototype.numChildren = function () {
        return this.mChildren.length;
    };
    FaultTreeGate.prototype.addChild = function (pChild) {
        this.mChildren.push(pChild);
    };
	FaultTreeGate.prototype.getTotalChildren = function()
	{
		var Count = 0;
		var findTotal = function(current)
		{
			current.mChildren.forEach(function(_child)
			{
				if(_child instanceof FaultTreeGate)
				{
					Count++;
					findTotal(_child);
				}
				else
				{
					Count++;
				}
			});
			return Count;
		};
		return findTotal(this);
	};
	FaultTreeGate.prototype.getTotalEnds = function()
	{
		var Count = 0;
		var findTotal = function(current)
		{
			current.mChildren.forEach(function(_child)
			{
				if(_child instanceof FaultTreeGate)
				{
					//Count++;
					findTotal(_child);
				}
				else
				{
					Count++;
				}
			});
			return Count;
		};
		return findTotal(this);
	};
	FaultTreeGate.prototype.getDepth = function()
	{
		var Count = 0;
		var findTotal = function(current)
		{
			current.mChildren.forEach(function(_child)
			{
				if(_child instanceof FaultTreeGate)
				{
					Count++;
					findTotal(_child);
				}
			});
			return Count;
		};
		return findTotal(this);
	};
    
	FaultTreeGate.prototype.draw = function()
	{
	};
	
	FaultTreeGate.prototype.drawChildren = function(context)
	{
		context.save();
		{
			this.draw(context);
			
			
			var totalSpace = (((this.getTotalChildren()-1)/2)*100);
			var branchOffset = 0;
			var translates = [];
			var self = this;
			
			this.mChildren.forEach(function(_child,index)
			{
				if(_child instanceof FaultTreeGate)
				{
					var translateVector = new Vector
					(
						(-totalSpace)+(branchOffset)+(_child.getTotalChildren()/2*100),
						100
					);
					context.save();
					{
						context.translate(translateVector.getX(), translateVector.getY());
						_child.drawChildren(context);
					}
					context.restore();
					if(index==0) { translates[0] = translateVector; }
					if(index==self.mChildren.length-1) { translates[1] = translateVector; }
					branchOffset += 100+((_child.getTotalEnds())*100);
				}
				else
				{
					var translateVector = new Vector
					(
						(-totalSpace)+(branchOffset),
						100
					);
					context.save();
					{
						context.translate(translateVector.getX(), translateVector.getY());
						_child.draw(context);
					}
					context.restore();
					if(index==0) { translates[0] = translateVector; }
					if(index==self.mChildren.length-1) { translates[1] = translateVector; }
					branchOffset += 100;
				}
			});
			context.save();
			{
				context.beginPath();
				context.moveTo(translates[0].getX(), 100);
				context.lineTo(translates[1].getX(), 100);
				context.stroke();
			}
			context.restore();
		}
		context.restore();
	};
    return FaultTreeGate;
})(FaultTreeNode);
