Array.prototype.reduce = function(callback,prev){
    //遍历this数组
    for(let i=0;i<this.length;i++){
        //判断有木有设置初始值
        if(typeof prev === "undefined"){
            callback(this[i],this[i+1],i+1,this)
        }else{
            //有初始值则调用callback，传入prev为第一个值，第二个为当前的i对应的值，当前的index为i，当前数组
            callback(prev,this[i],i,this)
        }
    }
    return prev
};


