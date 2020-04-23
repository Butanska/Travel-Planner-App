const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
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
// const HtmlWebPackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')

// module.exports = {
//   mode: 'production',
//   entry: './src/client/index.js',
//   output: {
//     libraryTarget: 'var',
//     library: 'Client'
//   },
//   devtool: 'source-map',
//   optimization: {
//     minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
//   },
//   module: {
//     rules: [
//             {
//               test: '/\.js$/',
//               exclude: /node_modules/,
//               loader: "babel-loader"
//             },
//             {
//               test: /\.scss$/,
//               use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
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
//     new MiniCssExtractPlugin({filename: '[name].css'}),
//   ]
// }