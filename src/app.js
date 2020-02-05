import "./test.css";
import "./test2.css";
import $ from 'jquery';
import ma from "./module/modulea.js";
import mb from "./module/moduleb.js"
 
// $.ajax({
// 	url:"/smartSpec/qd",
// 	type:'get',
// 	success:function(res){
// 		console.log(res);
// 	}
// });
var i=0;
 console.log(1);
 var i=0;
 setInterval(function(){
 	i++;
  document.getElementById('mydiv').innerHTML=i+"a";	
},2000)
 
 