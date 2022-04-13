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
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
		]
	}
}