
//Promise构造函数源码
const FULL_FILLED = 'fullFilled';// 成功
const REJECTED = 'rejected'; //失败
const PENDING = 'pending'; //初始状态
let Promise = function(fn){
    this.status = PENDING;
    
    this.successCallbacks = [];
    this.failedCallbacks = [];
    let resolve = (v) => {
        //resolve(value)
        this.value = v;
        this.status = FULL_FILLED;
        this.successCallbacks.forEach(fn=>fn(this.value))

    }

    let reject = (v) => {
        this.value = v;
        this.status = REJECTED;
        this.failedCallbacks.forEach(fun => fn(this.value))

    }
    try{
        fn(resolve,reject)
    }catch(e){
        reject(e)    //new promise.then() 执行失败
    }

}
//递归promise
function excutePromise(promiseOrVal,resolve,reject) {
    if(promiseOrVal instanceof Promise){
        promiseOrVal.then((v)=>{
            excutePromise(v,resolve,reject)
        })
    }else{
        //value基本数据类型
        resolve(promiseOrVal);
    }
}


//then一定要返回Promise供外部.then
Promise.prototype.then = function(onFullFilledFn,onRejectedFn){
    let chainPromise;
    //如果当前,3s以内,pending
    if(this.status === PENDING){
            chainPromise = new Promise((resolve,reject)=>{
                //保存函数
                this.successCallbacks.push(()=>{
                    //resolve后才会被发布,所执行
                    try{
                        setTimeout(()=>{
                            let value = onFullFilledFn(this.value)   //value有可能是promise也有可能是一般值
                            excutePromise(value,resolve,reject)
                        })
                    }catch(e){
                        reject(e)
                    }
                    
                })
                this.failedCallbacks.push(()=>{
                    try{
                        setTimeout(()=>{
                            let value = onRejectedFn(this.value)   //value有可能是promise也有可能是一般值
                            excutePromise(value,resolve,reject)
                        }) 

                    }catch(e){
                        reject(e)
                    }
                    
                })
             })  
    }
    if(this.status === FULL_FILLED){
        chainPromise = new Promise((resolve,reject)=>{
            try{
                setTimeout(()=>{
                    let value = onFullFilledFn(this.value)
                    excutePromise(value,resolve,reject)
                })
            }catch(e){
                reject(e)
            }
            
        })
    }
    if(this.status === REJECTED){
        chainPromise = new Promise((resolve,reject)=>{
            try{
                setTimeout(()=>{
                    let value = onRejectedFn(this.value)
                    excutePromise(value,resolve,reject)
                })
            }catch(e){
                reject(e)
            }
            
        })
    }
    return chainPromise
}





//模拟3组异步,返回的是promise实例
new Promise(function(resolve,reject){
        console.log('promise执行了')    //promise构造器中的函数参数,一经实例化,立即执行
        setTimeout(()=>{
            console.log('第一件事....')
            resolve('abcd');
        },3000)
}).then((data)=>{
    console.log('刚才成功了resolve')
    console.log('接收到的数据为:',data)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('第2件事。。。。')
            resolve('xxx')     //3s后调用resolve函数
        },3000);
    });  
}).then((d)=>{
    console.log('结束了',d)
})
 

