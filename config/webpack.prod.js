const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = (env = {}) => (
    merge(webpackConfig(), {
        devtool: 'source-map',
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: 'all',
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                    },
                },
            },
        },
        output: {
            filename: '[name].[chunkhash].min.js',
        },
        plugins: [
            new BundleAnalyzerPlugin({
                analyzerMode: env.analyze === 'true' ? 'server' : 'disabled',
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            new CompressionPlugin({
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
            }),
        ],
    })
);
