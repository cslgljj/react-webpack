const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin

module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出到dist文件夹，文件名字为bundle.js
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3000,
        hot: true
    },
    mode: "development"
}