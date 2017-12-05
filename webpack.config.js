const path = require('path')
var webpack = require('webpack')
let base = {
    index: './src/index.js'
}
module.exports = {
    entry: base,
    devtool:'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle3.js'
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: "jquery",
    //         jQuery: "jquery",
    //         "window.jQuery": "jquery"
    //     })
    // ] 配置这个后只需要在入口文件中var $=require(./XX/jqueryxx.xx.js)了，其他模块不用
     module: {  
        rules: [  
            {  
                test: /\.css$/,  
                use: ['stylesheet-loader']  
            }  
        ]  
    }  
}