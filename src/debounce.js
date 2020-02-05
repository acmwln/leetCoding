//防抖定义:对于短时间内连续触发的事件（上面的滚动事件）,防抖的含义就是让某个时间期限（如上面的1000毫秒）内,事件处理函数只执行一次。
/*
* fn [function] 需要防抖的函数
* delay [number] 毫秒，防抖期限值
*/
function debounce (fn,delay){
    let timer = null;
    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(fn,delay);
    }
}


function showTop  () {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
　　console.log('滚动条位置：' + scrollTop);
}
window.onscroll = debounce(showTop,1000) // 为了方便观察效果我们取个大点的间断值，实际使用根据需要来配置