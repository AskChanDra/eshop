const path = require("path");  // path module from Node JS
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

// const HTmlWebpackPlugin = require("html-webpack-plugin")
// plugins:[new HTmlWebpackPlugin()],


module.exports = {
    entry: {
        cart: "./src/cart.js",
        order: "./src/order.js",
        index: "./src/index.js"
    
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    // entry: './src/index.js',
    // output: {
    //     filename: "main.js",
    //     path: path.resolve(__dirname, "dist")
    // },
    // optimization:{
    //     splitChunks:{
    //         chunks: 'all'
    //     }
    // },
    optimization:{
        minimizer: [new UglifyJsPlugin()]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]
            }
        ]
    }
}