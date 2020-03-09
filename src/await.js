// async function fn(){
//     let v1 = await Promise.resolve(100);
//     console.log(v1);

//     let v2 = await Promise.resolve(200);
//     console.log(v2)
// }



// //await实现原理是从Generator来的
// function yieldPromise(genrator){
//     let interator = genrator();
//     interatorNext.call(interator)
// }


// function interatorNext(value){
//     result = interator.next(value)

//     if(result.done) return

//     let val = result.value;


//     Promise.resolve(val).then(val=>{
//         interatorNext.call(interator,val)
//     })
// }



// yieldPromise(function* (){
//     let v1 = yield Promise.resolve(100)
//     console.log(v1)
// })