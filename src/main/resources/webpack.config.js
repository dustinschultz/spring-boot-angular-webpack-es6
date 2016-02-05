const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins:[
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        })
    ]
};