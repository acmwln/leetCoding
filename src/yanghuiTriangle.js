//杨辉三角
var generate = function (numRows) {
    const result = [];
    if (numRows <= 0) {
        return result;
    }
    let i = 0, j = 0;    //i代表外层数组的索引   j代表每行数组里的索引
    for (let i = 0; i < numRows; i ++) {    
        const subArr = [];
        for (let j = 0; j <= i; j++) {
            if (j > 0 && j < i) {   //判断如果不是该列数组的首位或者最后一位，则值为a[i-1][j-1] + a[i-1][j] ，否则值为1
                subArr.push(result[i-1][j-1] + result[i-1][j]);
            } else {
                subArr.push(1);
            }
        }
        result.push(subArr);
    }
    return result;
};


// 在杨辉三角中，每个数是它左上方和右上方的数的和。
// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// eg:输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
