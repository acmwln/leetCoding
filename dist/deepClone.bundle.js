(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 19:
/***/ (function(module, exports) {

//判断是否是基本数据类型
// function isPrimitive(value){
//     return (
//         typeof value === 'string' ||
//         typeof value === 'number' ||
//         typeof value === 'symbol' ||
//         typeof value === 'boolean'
//     )
// }
//判断是否是一个js对象
// function isObject(value){
//     return Object.prototype.toString.call(value) === '[object Object]'
// }
//判断类型
function type(value) {
  var ret = typeof value;
  var template = {
    "[object Object]": "object",
    "[object Array]": "array",
    "[object Number]": "number - object",
    "[object Boolean]": "boolean - object",
    "[object String]": "string - object"
  };

  if (value === null) {
    return "null";
  } else if (ret == 'object') {
    var str = Object.prototype.toString.call(value);
    return template[str];
  } else {
    return ret;
  }
} //深拷贝一个值,解决循环引用的问题


function deepClone(value) {
  let memo = {}; //记录被拷贝的值,避免循环引用的出现

  function baseClone(value) {
    let res; //如果是原始类型则直接返回

    if (type(value) !== "object") {
      return value;
    } else if (type(value) === "array") {
      res = [...value];
    } else if (type(value) === "object") {
      res = { ...value
      };
    }

    Reflect.ownKeys(res).forEach(key => {
      if (typeof res[key] === 'object' && res[key] !== null) {
        //用memo来记录已经被拷贝过的引用地址,以此来解决循环引用的问题
        if (memo[res[key]]) {
          res[key] = memo[res[key]];
        } else {
          memo[res[key]] = res[key];
          res[key] = baseClone(res[key]);
        }
      }
    });
    return res;
  }

  return baseClone(value);
} //source:原对象
//target:克隆后的对象
// let argS = [];
// let argT = [];
// let deepClone = source => {
//     let target;
//     let proto;
//     if(type(source) !== "object"){
//         return source
//     }else if(type(source)==="array"){
//         return target = []
//     }else {
//         proto = Object.getPrototypeOf(source);//拿到source原型对象
//         target = Object.create(proto);//Object.create(原型:source的原型)
//     }
//     let index = argS.indexOf(source); //这项在数组中的索引
//     if(index !== -1) {
//         return target[index];
//     }
//     argS.push(source)
//     argT.push(target)
//     //对象内部的循环处理
//     for(let i in source){
//         target[i] = deepClone(source[i])
//     }
//     return target
// }


var obj = {};
var b = {
  obj
};
obj.b = b;
var copy = deepClone(obj);
console.log('深拷贝深拷贝深拷贝深拷贝深拷贝', obj, copy);
/***
 * 
 * Object.keys() 仅仅返回自身的可枚举属性，不包括继承来的，更不包括Symbol属性 
 * Object.getOwnPropertyNames() 返回自身的可枚举和不可枚举属性。但是不包括Symbol属性 
 * Object.getOwnPropertySymbols() 返回自身的Symol属性 
 * for...in 可以遍历对象的自身的和继承的可枚举属性，不包含Symbol属性 
 * Reflect.ownkeys() 返回对象自身的所有属性，不管是否可枚举，也不管是否是Symbol。注意不包括继承的属性
 */

/***/ })

},[[19,0]]]);