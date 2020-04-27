Array.prototype.myMap = function(func){
    for(var i = 0; i < this.length;i++){
        this[i] = func(this[i],i)
    }
    return this
}

var arr = [1,2,3,4,5]
var newArray = arr.myMap(function(el,index){
    return el + 2
})
console.log(newArray)