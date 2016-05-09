var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/, //process both .js and .jsx files
				include: APP_DIR, //which directory to look for the .js and .jsx files
				loader: 'babel' //loader name
			}
		]
	}
};

module.exports = config;