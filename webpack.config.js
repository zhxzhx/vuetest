var path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js', //webpack要打包的源文件是main.js
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js', //打包出来的文件名称,./build.js代表输出到当前目录下
    },
    module: {
        loaders: [
            {
                test:/\.vue$/,//vue的组件
                loader:'vue-loader'//编译vue的组件
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpeg|jpg)$/,
                loader: 'url-loader?limit=40000'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}