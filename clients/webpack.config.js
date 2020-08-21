const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    node: {
        fs: 'empty'
    },
    devtool: false,
    devServer: {
        compress: true,
        port: 8081,
        historyApiFallback: true,
    },
    entry: {
      bundle: './src/index.js', // file chạy chính 
    },
    output: {
        filename: 'js/[name].[chunkhash].js', // file bundle
        path: path.resolve(__dirname, 'dist') // đường dẫn cho file
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react'], // biên dịch es6,7 jsx
                        plugins: ["@babel/plugin-proposal-class-properties","@babel/plugin-syntax-dynamic-import","@loadable/babel-plugin","@babel/plugin-transform-runtime"] // sử dung error func es6
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(ttf|woff2|woff|dtd|svg|eot)$/i,
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
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: {name: "manifest"} // cacche lại các file khi không thay đổi
    },
    
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].css"}),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        })
    ],
}