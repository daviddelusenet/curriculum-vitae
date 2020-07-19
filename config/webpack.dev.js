const Jarvis = require('webpack-jarvis');
const { merge } = require('webpack-merge');
const { resolve } = require('path');
const webpack = require('webpack');
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
        plugins: [
            new webpack.NamedModulesPlugin(),
            new Jarvis({
                port: 1337,
            }),
        ],
    });
