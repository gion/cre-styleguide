const path = require('path')

module.exports = async ({ config }) => {
	config.module.rules.push({
		test: /\.less$/,
		loaders: [
			'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: true,
					importLoaders: 1,
					localIdentName: 'cre-[local]--[hash:5]',
				},
			},
			{
				loader: 'less-loader',
				options: { javascriptEnabled: true },
			},
		],
		include: path.resolve(__dirname, '../src/'),
	})

	config.module.rules[0].use[0].options.plugins = [
    require.resolve('babel-plugin-react-docgen'),
  ]

	return config
}
