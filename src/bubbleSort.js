//冒泡排序：将大值移动到数组右边，将小值移到数组的左边。
bubbleSort = arr => {
    for(let i = 0; i < arr.length-1; i++) {
      for(let j = 0; j < arr.length-i-1; j++) {
        if(arr[j] > arr[j+1]) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
    console.log('冒泡排序后的结果:',arr)
    return arr;
  }
  let arr = [0,5,3,2,7,1]
 bubbleSort(arr)


 var jwtest=function(name,sex){
  this.name=name;
  this.sex=sex
}

var obj=new jwtest("jaingwei","nan");
console.log('1',obj) //对象实例
console.log('2',obj.__proto__) //指向 原型对象 jwtest
console.log('3',obj.__proto__.constructor) //指向 构造函数
console.log('4',obj.__proto__.constructor.prototype) //指向 构造器