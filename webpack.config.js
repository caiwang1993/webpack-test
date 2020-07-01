/**
 * Created by cw on 2020/6/28.
 */
module.exports =  {
    devtool: 'eval-source-map',  //配置source-map
    entry:__dirname + "/app/main.js",  //唯一入口文件
    output: {
        path: __dirname +"/public", //打包后的文件存放的地方
        filename: "bundle.js"  //打包后输出文件的文件名
    },
    devServer:{
        contentBase:'./public',//本地服务器所加载的页面所在目录
        historyApiFallback:true,//不跳转
        inline:true //实时刷新
    }

};