Array.prototype.myFilter = function(func){
    var newArray = [];
    //func 就是
    //  function(el,index){
    //     if(el.sex == 'f'){
    //         return true
    //     }
    // }
    for(var i = 0; i < this.length;i++){
        if(func(this[i],i)){
            newArray.push(this[i])
        }
    }
    return newArray
}


var personArr = [
{name:'邓哥',src:'./img/1.jpg',des:'颈椎不好',sex:'f'},
{name:'成哥',src:'./img/2.jpg',des:'说',sex:'m'},
{name:'冰洁',src:'./img/3.jpg',des:'美',sex:'f'},
{name:'胖子',src:'./img/4.jpg',des:'胖',sex:'m'}
];

personArr.myFilter(function(el,index){
   if(el.sex == 'f'){
    return true
   }
})