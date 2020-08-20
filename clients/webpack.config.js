const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const lbr =[
    '@date-io/date-fns',
    '@date-io/moment',
    '@jandenma/xlsx-style',
    '@material-ui/core',
    '@material-ui/icons',
    '@material-ui/lab',
    '@material-ui/pickers',
    '@material-ui/styles',
    'animated-number-react',
    '@loadable/component',
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
    node: {
        fs: "empty"
    },
    mode: 'development',
    devServer: {
        port: 8080,
        //open: true
        historyApiFallback: true,
    },
    entry: {
      bundle: './src/index.js', // file chạy chính  
      vendor: lbr // cache các thư viện lại
    },
    output: {
        filename: '[name].[chunkhash].chunks.js', // file bundle
        path: path.join(__dirname, 'dist') // đường dẫn cho file
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
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
        // splitChunks: {
        //     chunks: 'all'
        // },
        runtimeChunk: {
            name: "manifest",
        }
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        })
    ],
}