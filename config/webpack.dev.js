const { merge } = require('webpack-merge');
const { resolve } = require('path');
const webpackConfig = require('./webpack.config');

module.exports = () =>
    merge(webpackConfig(), {
        devServer: {
            contentBase: resolve(__dirname, '../dist'),
            historyApiFallback: true,
            hot: true,
            open: true,
            publicPath: '/',
        },
        devtool: 'inline-source-map',
    });
