//let array1 = ['A1','A2','B1','B2','C1','C2','D1','D2']
//let array2 = ['A','B','C','D']

//合并后的数组为:['A1','A2','A','B1','B2','B','C1','C2','C','D1','D2','D']



//方法一:

// function arrayConcat(array1,array2){
//     array2 = array2.map(item=>item+'数组');
//     let arr = array1.concat(array2);
//     return arr.sort((a,b)=>a.localeCompare(b)).map((item)=>{
//         return item.replace('数组','')
//     })
// }


//方法er:
function arrayConcat(array1,array2){
    let n = 0;  //记录存的索引
    for(let i = 0;i<array2.length;i++){
        let item2 = array2[i];
        for(let k = 0;k < array1.length;k++){
            let item1 = array1[k];
            //如果包含就记录一下当前数组中这一项的索引位置(后面还有包含的会重新记录这个值)
            if(item1.includes(item2)){
                n = k;
            }
        }
        //把当前item2这一项插入到array1中N的后面
        array1.splice(n+1,0,item2);
    }
    return array1
}


let array1 = ['A1','A2','B1','B2','C1','C2','D1','D2']
let array2 = ['A','B','C','D']

console.log('合并后的数组为:',arrayConcat(array1,array2))
