//编写一个程序,将数组扁平化,并去除其中重复部分的数据,最终得到一个升序并不重复的数组

//方法1:ES6中的语法flat(),使用ES6中提供的Array.prototype.flat处理
// function arrayFlatAndUnique(arr){
//     arr = arr.flat(Infinity);
//     // Array.from(new Set(arr)).sort((a,b)=>a-b) 
//     return [...new Set(arr)].sort((a,b)=>a-b)
// }




//方法2:把数组直接变为字符串即可(数组toString之后,不管有多少级,最后都会变为以逗号分隔的字符串,没有中括号和所谓的层级了,相当于直接的扁平化了)
// function arrayFlatAndUnique(arr){
//     arr = arr.toString().split(',').map(item=>{
//         return Number(item)
//     })
//     return [...new Set(arr)]
// }




//方法3:
function arrayFlatAndUnique(arr){
    console.log('arr',arr)
    arr = JSON.stringify(arr).replace(/\[|\]/g,'').split(',').map(item=>{
        return Number(item)
    })
    return [...new Set(arr)]
}




//方法4:基于数组的some方法进行判断检测
// function arrayFlatAndUnique(arr){
//     while(arr.some(item=>Array.isArray(item))){
//         arr = [].concat(...arr)
//     }
//     return [...new Set(arr)]
// }




//方法5:自己递归处理
// ~function(){
//    function myFlat(){
//         let result = [];
//         _this = this; // 当前操作的数组
//         //循环arr中的每一项,把不是数组的存储到新数组中
//         let fn = (arr)=>{
//             for(let i=0;i<arr.length;i++){
//                 let item = arr[i]
//                 if(Array.isArray(item)){
//                     fn(item)   
//                     continue;
//                 }
//                 result.push(item)
//             }
//         }
//         fn(_this)
//         return result
//    }
//    Array.prototype.myFlat = myFlat
// }()




let arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10]
console.log('数组扁平化后升序去重后的结果:',arrayFlatAndUnique(arr))
// console.log('数组扁平化后升序去重后的结果(递归):',arr.myFlat())

