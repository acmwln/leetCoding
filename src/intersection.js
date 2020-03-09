//数组交集

/* 给定两个数组,写一个方法来计算他们的交集 思考:交差并补 */   
let nums1 = [12,23,34,45,34,25,46,35]
let nums2 = [10,35,24,36,47,56,23]


//方法一:
let arr = []
for(let i = 0;i < nums1.length;i++){
    let item1 = nums1[i]
    for(let k = 0;k < nums2.length;k++){
        let item2 = nums2[k]
        if(item1 === item2){
            arr.push(item1)
            break;
        }
    }
}
console.log('两个数组的交集:',arr)



//方法二:
// let arr = []
// nums1.forEach(item=> nums2.includes(item) ? arr.push(item) : null)
// console.log('两个数组的交集:',arr)