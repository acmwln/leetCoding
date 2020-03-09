(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 11:
/***/ (function(module, exports) {

// 箭头函数
let aa1 = (...args) => {
  let bb = [].slice.call(arguments, 0);
  let a = arguments[0];
  let b = arguments[1];
  let c = arguments[2];
  console.log('箭头函数', a, b, c, '和', a + b + c);
};

aa1(1, 2, 3); // 正常的函数

let aa = function (...args) {
  let bb = [].slice.call(arguments, 0);
  let a = arguments[0];
  let b = arguments[1];
  let c = arguments[2];
  console.log('正常函数', a + b + c);
};

aa(1, 2, 3);

/***/ })

},[[11,0]]]);