(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 26:
/***/ (function(module, exports) {

//旋转数组
//给定一个数组,将数组中的元素向右移动k个位置,其中k是非负数
//输入[1,2,3,4,5,6,7]和k = 3
//输出[5,6,7,1,2,3,4]
//解释:
//向右旋转一步: [7,1,2,3,4,5,6]
//向右旋转二步: [6,7,1,2,3,4,5]
//向右旋转三步: [5,6,7,1,2,3,4]
//输入:[-1,-100,3,99] 和 k = 2
//输出:[3,99,-1,-100]
//解释:
//向右旋转一步:[99,-1,-100,3]
//向右旋转二步:[3,99,-1,-100]
function rotate(k) {
  //参数处理
  if (k < 0 || k === 0 || k === this.length) return this;
  if (k > this.length) k = k % this.length; // return this.slice(-k).concat(this.slice(0,this.length-k))

  return [...this.splice(this.length - k), ...this];
}

Array.prototype.rotate = rotate;
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.rotate(3);

/***/ })

},[[26,0]]]);