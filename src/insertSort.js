//插入排序
function insertSort(arr){
    //1.准备一个新数组,用来存储抓到手里的牌,开始先抓一张牌进来
    let handle = [];
    handle.push(arr[0]);
    //2.从第二项开始依次抓牌,一直把台面上的牌抓光
    for(let i = 1;i < arr.length;i ++) {
        let A = arr[i] //A是新抓的牌
        //和handle手里的牌依次比较(从后向前比)
        for(let j = handle.length - 1;j >= 0; j--){
            let B = handle[j] //每次要比较的手里的牌
            //如果当前新牌A比手里要比较的牌B大了,则把A放到B后面
            if(A > B) {
                handle.splice(j+1, 0, A);
                break;
            }
            //已经比到第一项,我们把新牌放到手里的最前面即可
            if(j === 0) {
                handle.unshift(A)
            }

        }
    }
    return handle

}



let arr = [12,8,24,16,1]
arr = insertSort(arr)
console.log('插入排序后的结果:',arr)