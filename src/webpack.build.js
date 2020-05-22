
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入vue-loader库
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'production', // production
    entry: './src/main.js', // 入口文件
    output: {
        filename:'[name].[hash].js',
        path: process.cwd() + '/dist',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        },
		{
            test: /\.(css|less)$/,
            loader: 'vue-style-loader!less-loader!css-loader'
        } //css加载器
        ]
    },
    plugins: [new VueLoaderPlugin()  //vue-loader插件加载方式
        ,new HtmlWebpackPlugin({ //此部分新增加
            template: './index.html',//需要自动注入的模板的文件名称
            inject: true//是否自动注入生成后的文件
        })
    ],
    devtool: '#eval-source-map'
}
