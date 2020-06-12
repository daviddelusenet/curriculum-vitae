const { distPath, publicPath } = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = () => ({
    entry: {
        'curriculum-vitae': resolve(__dirname, '../src/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                exclude: /(node_modules)/,
                test: /\.js$/,
                use: ['babel-loader'],
            },
        ],
    },
    output: {
        filename: '[name].[hash].min.js',
        path: distPath,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: publicPath,
                    to: distPath,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/templates/index.html'),
        }),
    ],
});
