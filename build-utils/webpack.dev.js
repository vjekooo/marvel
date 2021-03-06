
const webpack = require('webpack')

const port = process.env.PORT || 3000

const config = {
	mode: 'development',
	output: {
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(s*)css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},
	devtool: 'inline-source-map',
	devServer: {
		host: 'localhost',
		historyApiFallback: true,
		open: true,
		hot: true,
		stats: 'minimal',
		port: port,
		overlay: {
      errors: true,
      warnings: true
    }
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config
