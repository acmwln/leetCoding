// function each(){
//     Object.prototype.each = function each(callback){
//         //this:调用方法的实例(类数组，数组，对象)
//         let length = this.length;
//         //数组和类数组
//         if(typeof length === 'number' && (length-1) in this){
//             for(let i = 0;i<length;i++){
//                 let item = this[i];
//                 let result = callback(item,i);

//                 if(result === false){
//                     break
//                 }
//                 this[i] = result
//             }
//             return;
//         }

//         //对象
//         for(let key in this){
//             if(!this.hasOwnProperty(key)) break;
//             let value = this[key];
//             let result = callback(value,i);
//             if(result === false){
//                 break;
//             }
//             this[key] = result;
//         }
//     }
// }


// [].each(function(){
//     //return false //结束循环
//     //return 其他值把数组中当前项替换
//     //return '@'
// })