(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 16:
/***/ (function(module, exports) {

//bind函数的用法:1. 第一个参数是this 2.传入的参数
//bind的两个特点: 1.返回函数 2.可以传入参数(传递预置的参数)
//封装的思路: 1.返回函数 2.处理this 3.参数的处理 4.构造函数的模拟实现
Function.prototype.bind2 = function (context) {
  //context = {value: 1}
  let self = this; //this指的是fn

  console.log('arguments', arguments); //arguments = [{value:1}, "lily"]
  //arguments类数组

  let args1 = Array.prototype.slice.call(arguments, 1); //截取从1位置到结束的值(包括begin不包括end)  args1=["lily"]
  // 1.返回函数

  let Fn = function () {
    console.log('返回函数的arguments', arguments); //arguments = [20]

    let args2 = Array.prototype.slice.call(arguments);
    self.apply(this instanceof Fn ? this : context, args1.concat(args2)); //判断this是否是Fn的实例(判断this是否在另一个对象的原型上)
  };

  Fn.prototype = Object.create(this.prototype); //实例  可以继承绑定函数原型中的值,Fn的原型指向(继承)fn的原型

  return Fn;
};

let obj = {
  value: 1
};

function fn(name, age) {
  console.log('bind输出:', this.value);
  console.log('bind输出:', name);
  console.log('bind输出:', age);
}

let res = fn.bind2(obj, 'lily');
res(20);

/***/ })

},[[16,0]]]);