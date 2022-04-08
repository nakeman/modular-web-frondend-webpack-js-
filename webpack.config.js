const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	plugins: [    
	new HtmlWebpackPlugin({      
		title: 'Hello Web world!!',      
		template: path.resolve(__dirname, './src/index.template.html'), 
		filename: 'index.html', 
	 }),  
	 new webpack.HotModuleReplacementPlugin(),
	 new CleanWebpackPlugin(),
	],

	mode: 'development',
  	devServer: {
   	historyApiFallback: true,
    	static: path.resolve(__dirname, './dist'),
    	open: true,
    	compress: true,
    	hot: true,
    	port: 8080,
  },
}