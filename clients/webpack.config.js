const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const lbr =[
    '@date-io/date-fns',
    '@date-io/moment',
    '@jandenma/xlsx-style',
    '@loadable/component',
    '@material-ui/core',
    '@material-ui/icons',
    '@material-ui/lab',
    '@material-ui/pickers',
    'animated-number-react',
    'axios',
    'chart.js',
    'ckeditor4-react',
    'connected-react-router',
    'date-fns',
    'file-saver',
    'formik',
    'google-map-react',
    'history',
    'moment',
    'moment-timezone',
    'query-string',
    'react',
    'react-awesome-slider',
    'react-chartjs-2',
    'react-dom',
    'react-lazy-load-image-component',
    'react-moment',
    'react-nestable',
    'react-redux',
    'react-redux-loading-bar',
    'react-render-html',
    'react-responsive-carousel',
    'react-router-dom',
    'react-sortablejs',
    'react-switch',
    'react-to-print',
    'react-toastify',
    'react-youtube',
    'redux',
    'redux-saga',
    'simple-react-lightbox',
    'xlsx',
    'yup'
];
module.exports = {
    mode: 'development',
    node: {
        fs: "empty"
    },
    devServer: {
        port: 3000,
        //open: true
    },
    entry: {
      bundle: './src/index.js', // file chạy chính  
      vendor: lbr // cache các thư viện lại
    },
    output: {
        filename: '[name].[chunkhash].js', // file bundle
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
                        presets: ['@babel/preset-env','@babel/preset-react','babel-polyfill'], // biên dịch es6,7 jsx
                        plugins: ["@babel/plugin-proposal-class-properties"] // sử dung error func es6
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
    optimization: { // code splitting tách thư viện
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all'
            }
          }
        },
        runtimeChunk: {name: "manifest"} // cacche lại các file khi không thay đổi
      },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        })
    ],
}