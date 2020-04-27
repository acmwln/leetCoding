//在数组头部添加元素
Array.prototype.unshift = function(){
    var array = [];
    //先生成需要添加元素的数组
    for(var i = 0; i < arguments.length; i ++) {
        array[i] = arguments[i]
    }
    //把源数组中的元素一个一个的丢到添加元素的后面
    for(var i = 0;i < this.length; i++){
        array[array.length] = this[i]
    }
    //把处理后的数组赋值给源数组
    for(var i = 0; i < array.length;i++){
        this[i] = array[i]
    }
    return this.length
}