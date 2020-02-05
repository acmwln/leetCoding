const webpack=require('webpack');
const extractTextCss=require('extract-text-webpack-plugin');
const dev=require('./webpack.dev.js');
const pro=require('./webpack.pro.js');
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var minicss=require('mini-css-extract-plugin');
const merge=require('webpack-merge');
const utils =require('./utils')



module.exports=env=>{
  //配置对象
  function getcssoptions(env){
    if(env==='production'){
       return{
             test:/\.css$/,
                 use:[ 
                 {
                   loader:minicss.loader,
                 },                       
                 {
                   loader:'css-loader',
                 }     
                ]         
        }
    }else{
       return{
             test:/\.css$/,
                 use:[ 
                 {
                   loader:'style-loader',
                 },                       
                 {
                   loader:'css-loader',
                 }     
                ]         
        }
    }
  }
  var common={
     entry: utils.entries(), //用一个方法实现多入口配置 eg:{app:"./src/app.js",app2:"./src/BFS.js"},
     output:{
     	filename:'[name].bundle.js'
     },
 
     module:{
        rules: [  
           //js处理
           {
            test:/\.js$/,
            use:
              {
                loader:'babel-loader',
              }
           },
           //css处理
           getcssoptions()                   
        ] 
     },
     plugins:[
     //提取额外css文件
        new minicss({
          filename:'[name].min.css'
        }), 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: {
                collapseWhitespace: true
            },
            inject:true,
        }),      
     ]
  };
  //返回配置对象
  return merge(env==='production'?pro:dev,common);
}




