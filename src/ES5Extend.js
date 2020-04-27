function inherit(Target,Origin){
	function F(){}
	F.prototype  = Origin.prototype
	Target.prototype = new F()
	Target.prototype.constructor = Target
}





//寄生组合继承：比较完美的方案
function Parent(parent){
	this.parent = parent
}

Parent.prototype.getName = function(){
	console.log(this.parent)
}

function Child(){
	Parent.call(this,name)
	this.child = child
}

function inheritPrototype(Parent,Child){
	Child.prototype = Object.create(Parent.prototype)
	Child.prototype.constructor = Child
}