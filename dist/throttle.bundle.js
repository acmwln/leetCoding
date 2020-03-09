(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 28:
/***/ (function(module, exports) {

function throttle(fn, delay) {
  let ctx;
  let args;
  let previous = Date.now(); //记录上次触发时间

  let laterFn = function () {
    fn.apply(ctx, args);
  };

  return function () {
    ctx = this;
    args = arguments;
    let now = Date.now();

    if (now - previous >= delay) {
      //本次触发时间和上次触发时间比较，如果间隔时间超过设定时间，则再次设置触发的定时器
      previous = now;
      setTimeout(laterFn, delay);
    }
  };
}

function showTop() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  console.log('滚动条位置：' + scrollTop);
}

window.onscroll = throttle(showTop, 1000);

/***/ })

},[[28,0]]]);