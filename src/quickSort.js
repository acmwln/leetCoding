//快速排序
function quickSort(arr){
    //4.结束递归(当arr中小于等于一项,则不用处理)
    if(arr.length<= 1){
        return arr
    }
    //1.找到数组的中间项,在原有的数组中把它移除
    let middleIndex = Math.floor(arr.length/2)//向下取整也可向上取整
    let middleValue = arr.splice(middleIndex,1)[0]
    //2.准备左右两个数组,循环剩下数组中的每一项,比当前项小的放入左边数组中,反之放入右边数组中
    let arrLeft = [];
    let arrRight = [];
    for(let i = 0;i<arr.length;i++){
        let item = arr[i];
        item < middleValue ? arrLeft.push(item) : arrRight.push(item)
    }
    //3.递归方式让左右两边的数组持续这样处理,一直到左右两边都排好序为止(最后让左边+中间+右边拼接成为最后的结果)
    
    return quickSort(arrLeft).concat(middleValue,quickSort(arrRight))
    
}

let arr = [12,8,15,16,1,24]
arr = quickSort(arr);
console.log('快速排序后的结果:',arr)

