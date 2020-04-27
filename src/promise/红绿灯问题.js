//Promise红绿灯的实现
// 使用promise 实现红绿灯颜色的跳转
// 绿灯执行三秒后
// 黄灯执行四秒后
// 红灯执行五秒
// html:
// <ul id="traffic" class="">
//     <li id="green"></li>
//     <li id="yellow"></li>
//     <li id="red"></li>
// </ul>
// css:
// /*垂直居中*/
// ul {position: absolute;width: 200px;height: 200px;top: 50%;left: 50%;transform: translate(-50%,-50%);}
// /*画3个圆代表红绿灯*/
// ul >li {width: 40px;height: 40px;border-radius:50%;opacity: 0.2;display: inline-block;}
// /*执行时改变透明度*/
// ul.red >#red, ul.green >#green,ul.yellow >#yellow{opacity: 1.0;}
// /*红绿灯的三个颜色*/
// #red {background: red;}
// #yellow {background: yellow;}
// #green {background: green;}
function timeout(timer){
    return function(){ 
        return new Promise(function(resolve,reject){
        setTimeout(resolve,timer) 
        })        
    }
}
var green = timeout(3000);
var yellow = timeout(4000);
var red = timeout(5000);
var traffic = document.getElementById("traffic");

(function restart(){
    'use strict'                     //严格模式
    console.log("绿灯"+new Date().getSeconds())  //绿灯执行三秒 
    traffic.className = 'green';

green()
.then(function(){
    console.log("黄灯"+new Date().getSeconds())  //黄灯执行四秒
    traffic.className = 'yellow';
    return yellow();
})
.then(function(){
    console.log("红灯"+new Date().getSeconds())   //红灯执行五秒
    traffic.className = 'red';
    return red();
}).then(function(){
    restart()
})
})();