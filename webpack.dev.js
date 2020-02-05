 
const webpack = require('webpack')
module.exports={
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 9001,
        hot:true,
        hotOnly:true,
        historyApiFallback:{
          rewrites:[
              {
               from:/^\/([ -~]+)/,
               to:function(context){
                 return "./"+context.match[1]+".html";
               }             
              }
          ]
        },
        proxy:{
          "/smartSpec":{
            target:"https://mooc.study.163.com/",
            changeOrigin:true,
            pathRewrite:{
              "^/smartSpec/qd":"/smartSpec/detail/1202816603.htm"
            },            
          }
        }
    }, 
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]	
}