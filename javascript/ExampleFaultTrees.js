var ExampleFaultTrees = (function () {
    function ExampleFaultTrees() {
        this.mFaultTrees = new Array();
		this.addFaultTree(this.generateSimpleExample());
		this.addFaultTree(this.generateSimpleExample2());
		this.addFaultTree(this.generateSteeringBrakeExample());
		
		this.setCurrentFaultTreeIndex(0);
    }
	
	ExampleFaultTrees.prototype.getCurrentFaultTree = function()
	{
		return this.mFaultTrees[ this.mCurrentFaultTreeIndex ];
	};
	
	ExampleFaultTrees.prototype.getCurrentFaultTreeIndex = function () {
        return this.mCurrentFaultTreeIndex;
    };
	ExampleFaultTrees.prototype.setCurrentFaultTreeIndex = function (pCurrentFaultTreeIndex) {
        this.mCurrentFaultTreeIndex = pCurrentFaultTreeIndex;
    };
	ExampleFaultTrees.prototype.incrementCurrentFaultTreeIndex = function () {
        this.mCurrentFaultTreeIndex = this.mCurrentFaultTreeIndex + 1;
		if (this.mCurrentFaultTreeIndex >= this.numFaultTrees()) {
			this.mCurrentFaultTreeIndex = 0;
		}
    };
	ExampleFaultTrees.prototype.decrementCurrentFaultTreeIndex = function () {
        this.mCurrentFaultTreeIndex = this.mCurrentFaultTreeIndex - 1;
		if (this.mCurrentFaultTreeIndex < 0) {
			this.mCurrentFaultTreeIndex = this.numFaultTrees() - 1;
		}
    };
    ExampleFaultTrees.prototype.getFaultTree = function (pIndex) {
        return this.mFaultTrees[pIndex];
    };
	ExampleFaultTrees.prototype.getNextFaultTree = function () {
		this.incrementCurrentFaultTreeIndex();
        return this.mFaultTrees[this.mCurrentFaultTreeIndex];
    };
	ExampleFaultTrees.prototype.getPreviousFaultTree = function () {
		this.decrementCurrentFaultTreeIndex();
        return this.mFaultTrees[this.mCurrentFaultTreeIndex];
    };
	ExampleFaultTrees.prototype.numFaultTrees = function () {
        return this.mFaultTrees.length;
    };
    ExampleFaultTrees.prototype.addFaultTree = function (pFaultTree) {
        this.mFaultTrees.push(pFaultTree);
    };
	
	ExampleFaultTrees.prototype.generateSimpleExample = function () {
		var topNode = new AndGate();
		
		var g2 = new OrGate();
		topNode.addChild(g2);
		
		var g3 = new OrGate();
		topNode.addChild(g3);
		
		var event1 = new BasicEvent();
		g2.addChild(event1);
		
		var event2 = new BasicEvent();
		g2.addChild(event2);
		
		var event3 = new BasicEvent();
		g3.addChild(event3);
		
		var event4 = new BasicEvent();
		g3.addChild(event4);		
		
		return topNode;
	}
	
	ExampleFaultTrees.prototype.generateSimpleExample2 = function () {
		var topNode = new OrGate();
		
		var g2 = new OrGate();
		topNode.addChild(g2);
		
		var g3 = new AndGate();
		topNode.addChild(g3);
		
		var event1 = new BasicEvent();
		g2.addChild(event1);
		
		var event2 = new BasicEvent();
		g2.addChild(event2);
		
		var event3 = new BasicEvent();
		g2.addChild(event3);
		
		var g4 = new OrGate();
		g3.addChild(g4);
		
		var event4 = new BasicEvent();
		g3.addChild(event4);	

		var g5 = new OrGate();
		g4.addChild(g5);
		
		var event5 = new BasicEvent();
		g4.addChild(event5);

		var event6 = new BasicEvent();
		g5.addChild(event6);
		
		var event7 = new BasicEvent();
		g5.addChild(event7);
		
		var event8 = new BasicEvent();
		g5.addChild(event8);
		
		return topNode;
	}
	
	ExampleFaultTrees.prototype.generateSteeringBrakeExample = function ()	{
		var topNode = new OrGate();
		
		var child1 = new BasicEvent();
		topNode.addChild(child1);
		
		var child2 = new BasicEvent();
		topNode.addChild(child2);
		
		var child3 = new BasicEvent();
		topNode.addChild(child3);
		
		var child4 = new BasicEvent();
		topNode.addChild(child4);
		
		var child5 = new BasicEvent();
		topNode.addChild(child5);
		
		var child6 = new BasicEvent();
		topNode.addChild(child6);
		
		var child7 = new AndGate();
		topNode.addChild(child7);
		
		var child8 = new BasicEvent();
		topNode.addChild(child8);
		
		var child9 = new AndGate();
		topNode.addChild(child9);
		
		var child10 = new BasicEvent();
		topNode.addChild(child10);
		
		var grandChild1 = new OrGate();
		child7.addChild(grandChild1);
		
		var grandChild2 = new OrGate();
		child7.addChild(grandChild2);
		
		var grandChild3 = new OrGate();
		child9.addChild(grandChild3);
		
		var grandChild4 = new OrGate();
		child9.addChild(grandChild4);
		
		var greatGrandChild1 = new BasicEvent();
		grandChild1.addChild(greatGrandChild1);
		
		var greatGrandChild2 = new BasicEvent();
		grandChild1.addChild(greatGrandChild2);
		
		var greatGrandChild3 = new BasicEvent();
		grandChild1.addChild(greatGrandChild3);
		
		var greatGrandChild4 = new BasicEvent();
		grandChild1.addChild(greatGrandChild4);
		
		var greatGrandChild5 = new BasicEvent();
		grandChild1.addChild(greatGrandChild5);
		
		var greatGrandChild6 = new BasicEvent();
		grandChild1.addChild(greatGrandChild6);
		
		var greatGrandChild7 = new BasicEvent();
		grandChild1.addChild(greatGrandChild7);
		
		var greatGrandChild8 = new BasicEvent();
		grandChild1.addChild(greatGrandChild8);
		
		var greatGrandChild9 = new BasicEvent();
		grandChild1.addChild(greatGrandChild9);
		
		var greatGrandChild10 = new BasicEvent();
		grandChild1.addChild(greatGrandChild10);
		
		var greatGrandChild11 = new BasicEvent();
		grandChild1.addChild(greatGrandChild11);
		
		var greatGrandChild12 = new AndGate();
		grandChild1.addChild(greatGrandChild12);
		
		var greatGrandChild13 = new BasicEvent();
		grandChild1.addChild(greatGrandChild13);
		
		var greatGrandChild14 = new BasicEvent();
		grandChild1.addChild(greatGrandChild14);
		
		var greatGrandChild15 = new BasicEvent();
		grandChild2.addChild(greatGrandChild15);
		
		var greatGrandChild16 = new BasicEvent();
		grandChild2.addChild(greatGrandChild16);
		
		var greatGrandChild17 = new BasicEvent();
		grandChild2.addChild(greatGrandChild17);
		
		var greatGrandChild18 = new BasicEvent();
		grandChild2.addChild(greatGrandChild18);
		
		var greatGrandChild19 = new BasicEvent();
		grandChild2.addChild(greatGrandChild19);
		
		var greatGrandChild20 = new BasicEvent();
		grandChild2.addChild(greatGrandChild20);
		
		var greatGrandChild21 = new BasicEvent();
		grandChild2.addChild(greatGrandChild21);
		
		var greatGrandChild22 = new BasicEvent();
		grandChild2.addChild(greatGrandChild22);
		
		var greatGrandChild23 = new BasicEvent();
		grandChild2.addChild(greatGrandChild23);
		
		var greatGrandChild24 = new BasicEvent();
		grandChild2.addChild(greatGrandChild24);
		
		var greatGrandChild25 = new BasicEvent();
		grandChild2.addChild(greatGrandChild25);
		
		var greatGrandChild26 = new AndGate();
		grandChild2.addChild(greatGrandChild26);
		
		var greatGrandChild27 = new BasicEvent();
		grandChild2.addChild(greatGrandChild27);
		
		var greatGrandChild28 = new BasicEvent();
		grandChild2.addChild(greatGrandChild28);
		
		var greatGrandChild29 = new BasicEvent();
		grandChild3.addChild(greatGrandChild29);
		
		var greatGrandChild30 = new BasicEvent();
		grandChild3.addChild(greatGrandChild30);
		
		var greatGrandChild31 = new BasicEvent();
		grandChild3.addChild(greatGrandChild31);
		
		var greatGrandChild32 = new BasicEvent();
		grandChild3.addChild(greatGrandChild32);
		
		var greatGrandChild33 = new BasicEvent();
		grandChild3.addChild(greatGrandChild33);
		
		var greatGrandChild34 = new BasicEvent();
		grandChild3.addChild(greatGrandChild34);
		
		var greatGrandChild35 = new BasicEvent();
		grandChild3.addChild(greatGrandChild35);
		
		var greatGrandChild36 = new BasicEvent();
		grandChild3.addChild(greatGrandChild36);
		
		var greatGrandChild37 = new BasicEvent();
		grandChild3.addChild(greatGrandChild37);
		
		var greatGrandChild38 = new BasicEvent();
		grandChild3.addChild(greatGrandChild38);
		
		var greatGrandChild39 = new BasicEvent();
		grandChild3.addChild(greatGrandChild39);
		
		var greatGrandChild40 = new TransferGate();
		grandChild3.addChild(greatGrandChild40);
		
		var greatGrandChild41 = new BasicEvent();
		grandChild3.addChild(greatGrandChild41);
		
		var greatGrandChild42 = new BasicEvent();
		grandChild3.addChild(greatGrandChild42);
		
		var greatGrandChild43 = new BasicEvent();
		grandChild4.addChild(greatGrandChild43);
		
		var greatGrandChild44 = new BasicEvent();
		grandChild4.addChild(greatGrandChild44);
		
		var greatGrandChild45 = new BasicEvent();
		grandChild4.addChild(greatGrandChild45);
		
		var greatGrandChild46 = new BasicEvent();
		grandChild4.addChild(greatGrandChild46);
		
		var greatGrandChild47 = new BasicEvent();
		grandChild4.addChild(greatGrandChild47);
		
		var greatGrandChild48 = new BasicEvent();
		grandChild4.addChild(greatGrandChild48);
		
		var greatGrandChild49 = new BasicEvent();
		grandChild4.addChild(greatGrandChild49);
		
		var greatGrandChild50 = new BasicEvent();
		grandChild4.addChild(greatGrandChild50);
		
		var greatGrandChild51 = new BasicEvent();
		grandChild4.addChild(greatGrandChild51);
		
		var greatGrandChild52 = new BasicEvent();
		grandChild4.addChild(greatGrandChild52);
		
		var greatGrandChild53 = new BasicEvent();
		grandChild4.addChild(greatGrandChild53);
		
		var greatGrandChild54 = new TransferGate();
		grandChild4.addChild(greatGrandChild54);
		
		var greatGrandChild55 = new BasicEvent();
		grandChild4.addChild(greatGrandChild55);
		
		var greatGrandChild56 = new BasicEvent();
		grandChild4.addChild(greatGrandChild56);
		
		var greatGreatGrandChild1 = new OrGate();
		greatGrandChild12.addChild(greatGreatGrandChild1);
		
		var greatGreatGrandChild2 = new OrGate();
		greatGrandChild12.addChild(greatGreatGrandChild2);
		
		var greatGreatGrandChild3 = new OrGate();
		greatGrandChild26.addChild(greatGreatGrandChild3);
		
		var greatGreatGrandChild4 = new OrGate();
		greatGrandChild26.addChild(greatGreatGrandChild4);
		
		var greatGreatGreatGrandChild1 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild1);
		
		var greatGreatGreatGrandChild2 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild2);
		
		var greatGreatGreatGrandChild3 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild3);
		
		var greatGreatGreatGrandChild4 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild4);
		
		var greatGreatGreatGrandChild5 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild5);
		
		var greatGreatGreatGrandChild6 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild6);
		
		var greatGreatGreatGrandChild7 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild7);
		
		var greatGreatGreatGrandChild8 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild8);
		
		var greatGreatGreatGrandChild9 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild9);
		
		var greatGreatGreatGrandChild10 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild10);
		
		var greatGreatGreatGrandChild11 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild11);
		
		var greatGreatGreatGrandChild12 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild12);
		
		var greatGreatGreatGrandChild13 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild13);
		
		var greatGreatGreatGrandChild14 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild14);
		
		var greatGreatGreatGrandChild15 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild15);
		
		var greatGreatGreatGrandChild16 = new BasicEvent();
		greatGreatGrandChild1.addChild(greatGreatGreatGrandChild16);
		
		var greatGreatGreatGrandChild17 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild17);
		
		var greatGreatGreatGrandChild18 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild18);
		
		var greatGreatGreatGrandChild19 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild19);
		
		var greatGreatGreatGrandChild20 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild20);
		
		var greatGreatGreatGrandChild21 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild21);
		
		var greatGreatGreatGrandChild22 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild22);
		
		var greatGreatGreatGrandChild23 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild23);
		
		var greatGreatGreatGrandChild24 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild24);
		
		var greatGreatGreatGrandChild25 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild25);
		
		var greatGreatGreatGrandChild26 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild26);
		
		var greatGreatGreatGrandChild27 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild27);
		
		var greatGreatGreatGrandChild28 = new BasicEvent();
		greatGreatGrandChild2.addChild(greatGreatGreatGrandChild28);
		
		var greatGreatGreatGrandChild29 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild29);
		
		var greatGreatGreatGrandChild30 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild30);
		
		var greatGreatGreatGrandChild31 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild31);
		
		var greatGreatGreatGrandChild32 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild32);
		
		var greatGreatGreatGrandChild33 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild33);
		
		var greatGreatGreatGrandChild34 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild34);
		
		var greatGreatGreatGrandChild35 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild35);
		
		var greatGreatGreatGrandChild36 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild36);
		
		var greatGreatGreatGrandChild37 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild37);
		
		var greatGreatGreatGrandChild38 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild38);
		
		var greatGreatGreatGrandChild39 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild39);
		
		var greatGreatGreatGrandChild40 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild40);
		
		var greatGreatGreatGrandChild41 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild41);
		
		var greatGreatGreatGrandChild42 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild42);
		
		var greatGreatGreatGrandChild43 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild43);
		
		var greatGreatGreatGrandChild44 = new BasicEvent();
		greatGreatGrandChild3.addChild(greatGreatGreatGrandChild44);
		
		var greatGreatGreatGrandChild45 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild45);
		
		var greatGreatGreatGrandChild46 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild46);
		
		var greatGreatGreatGrandChild47 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild47);
		
		var greatGreatGreatGrandChild48 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild48);
		
		var greatGreatGreatGrandChild49 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild49);
		
		var greatGreatGreatGrandChild50 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild50);
		
		var greatGreatGreatGrandChild51 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild51);
		
		var greatGreatGreatGrandChild52 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild52);
		
		var greatGreatGreatGrandChild53 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild53);
		
		var greatGreatGreatGrandChild54 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild54);
		
		var greatGreatGreatGrandChild55 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild55);
		
		var greatGreatGreatGrandChild56 = new BasicEvent();
		greatGreatGrandChild4.addChild(greatGreatGreatGrandChild56);
		
		return topNode;
	}
	
    return ExampleFaultTrees;
})();
