//promise.finally不是类上的方法
new Promise(()=>{
    resolve(100)
    reject(100)
    //finally也是一个then方法
}).finally(()=>{     //无论成功和失败都会执行的方法,如果finally中返回一个promise会等待这个promise执行完成后继续执行
    console.log('hello')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject();
        },1000)
    })
}).then((data)=>{
    console.log('success',+data)
}).catch((err)=>{
    console.log(err)
})