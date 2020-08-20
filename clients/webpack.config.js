const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    node: {
        fs: "empty"
    },
    mode: 'development',
    devServer: {
        port: 8081,
        //open: true
        historyApiFallback: true,
        contentBase: './dist'
    },
    entry: {
      bundle: './src/index.js', // file chạy chính
    },
    output: {
        filename: '[name].[chunkhash].chunks.js', // file bundle
        path: path.join(__dirname, 'dist'), // đường dẫn cho file
        publicPath: '/' // thư mục public
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts',
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                }
            },
            
        ]
    },
    optimization: {
        // splitChunks: {
        //     cacheGroups: {
        //       vendor: {
        //         test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
        //         name: 'vendor',
        //         chunks: 'all',
        //       }
        //     }
        //   },
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: {
            name: "manifest",
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].chunks.css",
        }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new CleanWebpackPlugin()
    ],
}