let fs = require('fs')
function read(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}


//promise通过链式调用的方式解决了这个问题

//成功的回调和失败的回调都可以返回一个结果
//情况1:如果返回的是一个promise，那么会让这个promise执行，并且采用它的状态，将成功或失败的结果传递给外层的下一个then中
//情况2:如果返回的是一个普通值会把这个值作为外层的下一次then的成功的回调中
//情况3:抛出一个异常
read('name.txt','utf8').then((data)=>{
    return read(data+'1','utf8')   //返回错误的promise
}).then((data)=>{
    console.log(data)
},err=>{
    return 100
}).then((data)=>{
    console.log(data)   //100，抛出异常可以走到下一次的then的失败中
    throw new Error('error')
}).catch((err)=>{
    console.log('只要上面没有捕获错误就会执行这个catch',err)
}).then(data=>{
    console.log(data)
})



//promise如何实现链式调用的   jq返回的this，promise的链式调用返回一个新的promise
//promise必须返回一个全新的promise，这样可以解决promise的状态问题，否则会出现promise刚开始成功又变了失败状态

read('name.txt','utf8').then((data)=>{
    return data
}).then((data)=>{
    console.log(data)
})


//----------------------------------手写promise start------------------------------------
//宏
const PENDING = 'PENDING'   //等待态
const FULFILLED = 'FULFILLED' //成功态
const REJECTED = 'REJECTED' //失败态

const resolvePromise = (promise2,x,resolve,reject) =>{
    //判断可能你的promise要和别人的promise来混用
    //可能不同的promise库之间要相互调用
    if(promise2 === x){  //x如果和promise2是同一个人，x永远不能成功或者失败，所以就卡死了，我们需要直接报错即可
        return new reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    //我们要判断x的状态
    //1.先判断它是不是对象或者函数
    if((typeof x === 'object' && x!=null) || (typeof x === 'function')){
        //x需要是一个对象或者是函数
        try{
            let then = x.then;//取出then方法，这个then方法是采用defineProperty来定义的
            if(typeof then === 'function'){
                //判断then是不是一个函数，如果then不是一个函数，说明不是promise
                //只能认准它是一个promise了
                then.call(x,(y)=>{  //如果x是一个promise，就采用这个promise的返回结果
                    resolvePromise(promise2,y,resolve,reject)   //继续解析成功的值
                },
                (r)=>{
                    reject(r);//用r作为失败的结果
                })
                
            }else{
                resolve(x)
            }
        }catch(e){
            reject(e) //then失败了，直接触发promise2的失败逻辑
        }
    }else{ //肯定不是promise
        resolve(x)  //直接成功即可  
    }

}
class Promise{
    constructor(executor){
        this.status= PENDING //默认是等待态
        this.value = undefined;
        this.reason = undefined;
        this.onResolveCallbacks = [];//存放成功时的回调
        this.onRejectedCallbacks = [];//存放失败时的回调
        let resolve = (value)=>{   //直到解析出一个普通值来
            if(value instanceof Promise){
                return value.then(resolve,reject)
            }   
            if(this.status === PENDING){
                this.status= FULFILLED
                this.value = value
                this.onResolveCallbacks.forEach(fn=>fn())
            }
        }
        let reject = (reason)=>{
            if(this.status === PENDING){
                this.status= REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn=>fn())
            }
        }
        try{ //try + catch只能捕获同步
            executor(resolve,reject)
        }catch(e){
            console.log(e)
            reject(e)
        }
    }
//只要是一个普通值，就会让下一个promise变成成功状态
//这个x有可能是一个promise，需要采用这个promise的状态
then(onFulfilled,onRejected){
    //递归
    let promise2 = new Promise((resolve,reject)=>{
        if(this.status === FULFILLED){
            setTimeout(()=>{   //异步去拿promise2
                try{
                    let x = onFulfilled(this.value);
                    resolvePromise(promise2,x,resolve,reject)
                }catch(e){
                    reject(e)
                }
            },0)
            
        }
        if(this.status === REJECTED){
            setTimeout(()=>{
                try{
                    let x = onRejected(this.reason)
                    resolvePromise(promise2,x,resolve,reject)
                }catch(e){
                    reject(e)
                }
            },0)
        }
        if(this.status === PENDING){
            this.onResolveCallbacks.push(()=>{
                setTimeout(()=>{   //异步去拿promise2
                    try{
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2,x,resolve,reject)
                    }catch(e){
                        reject(e)
                    }
                },0)
            })
            this.onRejectedCallbacks.push(()=>{
                setTimeout(()=>{
                    try{
                        let x = onRejected(this.reason)
                        resolvePromise(promise2,x,resolve,reject)
                    }catch(e){
                        reject(e)
                    }
                },0)
            })
        }
    })
    return promise2
    }

    //catch方法：指代的就是then没有成功回调的一个别名而已
    catch(errCallback){   //就是一个没有成功的then
        return this.then(null,errCallback)
    }
}



 


//----------------------------------手写promise end------------------------------------
