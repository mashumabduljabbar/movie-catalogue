const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
 
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
	host: '192.168.1.104',
	port: 8080,
  },
});