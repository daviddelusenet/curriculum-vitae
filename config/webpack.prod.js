/* eslint sort-keys: 0 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = (env = {}) => (
  merge(baseConfig(), {
    output: {
      filename: '[name].[chunkhash].min.js',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    devtool: 'source-map',
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
