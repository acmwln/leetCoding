let fs = require('fs').promises
let util = require('util')
//promise把异步的node中的api转化成promise方法，只针对node方法
function promisify(fn){
    return function(){
        return new Promise((resolve,reject)=>{
            fn(...arguments,function(err,data){
                if(err)  reject();
                resolve(data)
            })
        })
    }
}
let read = util.promisify(fs.readFile)
//我们可以将node中的api转换成promise的写法,node中的回调函数有2个参数，一个是err，一个是data
fs.readFile('name.txt','utf8').then(data=>{
    console.log(data)
})


//各种node模块只要遵循这个参数合理 =》将异步方法转化成promise




//promise.all 方法表示等待所有的promise全部成功后，才会执行回调，如果有一个promise失败则promise就失败

let fs = require('fs').promises;
const isPromise = value => {
    if((typeof value === 'object' && value!=null) || (typeof value === 'function')){
        return typeof value.then === 'function'
    }
    return false;
}
Promise.all = function(promises){
    return new Promise((resolve,reject)=>{
        let arr = []; //返回的数组
        let i = 0;  //定义一个计数器变量
        let processData = (index,data) =>{
            arr[index] = data;
            if(++i === promises.length){
                resolve(arr)
            }
        }
        for(let i=0;i<promises.length;i++){
            let current = promises[i]
            if(isPromise(current)){   //如果有任何一个promise失败了，直接让这个promise变成失败态即可
                current.then(data=>{
                    processData(i,current)
                },reject)
            }else{
                processData(i,current)
            }
        }
    })
}

//让一个promise执行就调用它的then方法
Promise.all([1,2,3,fs.readFile('name.txt','utf8'),fs.readFile('age.txt','utf8')]).then(values=>{
    console.log(values)
},err=>{
    console.log(err)
})




