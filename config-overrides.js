const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    https: require.resolve('https-browserify'),
    http: require.resolve('stream-http'),
    url: require.resolve('url'),
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer'),
    crypto: require.resolve('crypto-browserify'),
  };
  
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};
