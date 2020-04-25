const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader' ]
            },
            {
              test: /\.(png|svg|jpg|gif)$/,
              use: ['file-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
            //added the following to avoid the bundle(dist) loading twice
            // inject: false
        }),
        new MiniCSSExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
    ]
}


// const path = require('path')
// const webpack = require('webpack')
// const HtmlWebPackPlugin = require("html-webpack-plugin")
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// module.exports = {
//     entry: './src/client/index.js',
//     mode: 'development',
//     devtool: 'source-map',
//     stats: 'verbose',
//     output: {
//         libraryTarget: 'var',
//         library: 'Client'
//     },
//     module: {
//         rules: [
//             {
//                 test: '/\.js$/',
//                 exclude: /node_modules/,
//                 loader: "babel-loader"
//             },
//             {
//                 test: /\.scss$/,
//                 use: [ 'style-loader', 'css-loader', 'sass-loader' ]
//             },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: ['file-loader'],
//             },
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: "./src/client/views/index.html",
//             filename: "./index.html",
//         }),
//         new CleanWebpackPlugin({
//             // Simulate the removal of files
//             dry: true,
//             // Write Logs to Console
//             verbose: true,
//             // Automatically remove all unused webpack assets on rebuild
//             cleanStaleWebpackAssets: true,
//             protectWebpackAssets: false
//         }),
//     ]
// }




// const path = require('path')
// const webpack = require('webpack')
// const HtmlWebPackPlugin = require('html-webpack-plugin')
// const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// module.exports = {
//   mode: 'development',
//   entry: './src/client/index.js',
//   // output: {
//   //   libraryTarget: 'var',
//   //   library: 'Client'
//   // },
//   devtool: 'source-map',
//   stats: 'verbose',
//   module: {
//     rules: [
//             {
//               test: '/\.js$/',
//               exclude: /node_modules/,
//               loader: "babel-loader"
//             },
//             {
//               test: /\.scss$/,
//               use: [ 'style-loader', 'css-loader', 'sass-loader' ]
//             },
//             // {
//             //   test: /\.html$/i,
//             //   loader: 'html-loader',
//             // },
//             {
//               test: /\.(png|svg|jpg|gif)$/,
//               use: ['file-loader'],
//             },
//     ]
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//         template: "./src/client/views/index.html",
//         filename: "./index.html",
//     }),
//     new MiniCSSExtractPlugin({
//       filename: "[name].css",
//       chunkFilename: "[id].css"
//     }),
//     new CleanWebpackPlugin({
//       // Simulate the removal of files
//       dry: true,
//       // Write Logs to Console
//       verbose: true,
//       // Automatically remove all unused webpack assets on rebuild
//       cleanStaleWebpackAssets: true,
//       protectWebpackAssets: false
//     }),
//   ]

// }