Array.prototype.myForEach = function(func){
	for(var i = 0; i < this.length;i++){
		func(this[i],i)
	}
}


var personArr = [
{name:'邓哥',src:'./img/1.jpg',des:'颈椎不好',sex:'f'},
{name:'成哥',src:'./img/2.jpg',des:'说',sex:'m'},
{name:'冰洁',src:'./img/3.jpg',des:'美',sex:'f'},
{name:'胖子',src:'./img/4.jpg',des:'胖',sex:'m'}
];

personArr.myForeach(function(el,index){
	console.log(el.name)
})