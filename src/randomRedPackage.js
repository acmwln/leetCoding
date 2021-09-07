//js实现一个拼手气分红包的方法，输入为总金额和人数，输出为每个人分得的金额

//方法1：二倍均值法
//金额随机，剩余红包金额为M，剩余人数为N，那么有如下公式：
//每次抢到的金额 = 随机区间 （0， M / N X 2）
//这个公式，保证了每次随机金额的平均值是相等的，不会因为抢红包的先后顺序而造成不公平。
/**
 * 
 * @param {*} totalAmount [总金额]
 * @param {*} totalPeople [总人数]
 * @returns {[Array]} [每个人抢到的金额]
 */
function assign(totalAmount,totalPeople){
    debugger;
    console.log('总金额',totalAmount,'总人数',totalPeople)
    var remainAmount = +totalAmount;
    var remainPeople = +totalPeople;
    console.log('剩余金额',remainAmount,'剩余人数',remainPeople)
    var arr = [];
    while(remainPeople > 0){
        let num = scramble(remainAmount,remainPeople);
        console.log('人数',num)
        remainAmount = remainAmount - num;
        console.log('remainPeople',remainAmount,remainPeople)
        remainPeople --;
        arr.push(num);
    }
    console.log('随机金额',arr)
    return arr;
}

function scramble(remainAmount,remainPeople) {
    console.log('剩余金额scramble',remainAmount,'剩余人数scramble',remainPeople)
    if(remainPeople === 1) {
        return +remainAmount.toFixed(2);
    }
    let max = ((remainAmount/remainPeople) * 2 - 0.01).toFixed(2);
    console.log('剩余金额----scramble',remainAmount,'剩余人数-----scramble',remainPeople,(remainAmount/remainPeople) * 2,max )
    let min = 0.01;
    let range = max-min;
    console.log("range",range)
    let rand = Math.random();
    let num = min + Math.round(rand * range);
    console.log("num---scramble",num,rand * range)
    return num;
}


assign(100,10)








//方法2：线段切割法
//何谓线段切割法？我们可以把红包总金额想象成一条很长的线段，而每个人抢到的金额，则是这条主线段所拆分出的若干子线段