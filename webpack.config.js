/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SuppressChunksPlugin = require('suppress-chunks-webpack-plugin').default;

// Get our file path variables
const CONFIG_PATHS = require('./webpack.config.paths');

const CONFIG_HTML = require('./webpack.config.html');

// Are we running the 'dev' task?
const IS_DEV = (process.env.npm_lifecycle_event === 'dev');

// Shared options between multiple loaders
const OPTIONS = {
	minimize: (IS_DEV ? false : true),  // minimize output in production
	sourceMap: (IS_DEV ? true : false), // apply sourcemaps in dev (only applies when devtool prop is set)
};

// Base config gets merged in environment specific config files
module.exports = {
	//
	// Define our entry files
	//
	entry: {
		vendor: [
			'babel-polyfill',
			'jquery',
			'gsap',
			//'./node_modules/gsap/Draggable',
			//'./node_modules/gsap/ScrollToPlugin',
			//'slick-carousel',
			'./src/scripts/vendor/fulltilt.min'
		],
		base: [`${CONFIG_PATHS.src.scripts}/appBase.js`, `${CONFIG_PATHS.src.styles}/appBase.scss`],
		// components: [`${CONFIG_PATHS.src.scripts}/appComponents.js`, `${CONFIG_PATHS.src.styles}/appComponents.scss`],
		chrome: [`${CONFIG_PATHS.src.scripts}/appChrome.js`, `${CONFIG_PATHS.src.styles}/appChrome.scss`],
		home: [`${CONFIG_PATHS.src.scripts}/appHome.js`, `${CONFIG_PATHS.src.styles}/appHome.scss`],
		subpage: [`${CONFIG_PATHS.src.styles}/appSubpage.scss`],
	},
	//
	// Define our output files
	//
	output: {
		filename: `${CONFIG_PATHS.output.scripts}/[name].js`, // JS filenames only. CSS files are created by ExtractTextPlugin
		path: CONFIG_PATHS.dist.root, // location of all compiled files
		publicPath: CONFIG_PATHS.output.root // path used to reference files on the frontend
	},
	//
	// Define our plugins
	//
	plugins: [
		// Speed up compile times
		new HardSourceWebpackPlugin(),
		// Don't create empty JS file for css only entries
		new SuppressChunksPlugin([
			{
				name: 'subpage',
				match: /\.js$/,
			},
		]),
		// Create our JS entry files and
		// consolidate webpack's map of all modules into one 'manifest' file
		new webpack.optimize.CommonsChunkPlugin({
			names: ['subpage', 'home', 'chrome', 'components', 'base', 'vendor', 'manifest'],
			minChunks: Infinity,
		}),
		// Automatically load modules instead of having to import them everywhere
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		// Lint our CSS
		new StyleLintPlugin(),
		// Create our CSS entry files
		new ExtractTextPlugin({
			filename: `${CONFIG_PATHS.output.styles}/[name].css`,
		}),
	].concat(CONFIG_HTML), // Add our HTML plugins
	//
	// Define shortcuts for import/require paths
	//
	resolve: {
		extensions: [
			'.js',
			'.jpg', '.jpeg', '.png', '.gif', '.svg',
		],
		alias: {
			scripts: path.resolve(__dirname, CONFIG_PATHS.src.scripts),
			images: path.resolve(__dirname, CONFIG_PATHS.src.images),
		}
	},
	//
	// Define our loaders
	//
	module: {
		rules: [
			// Images that are imported in JS
			// (images from CSS/HTML are handled in CopyWebpackPlugin or devServer.contentBase)
			{
				test: /\.(svg|png|gif|jpe?g)/i,
				include: CONFIG_PATHS.src.images,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							context: CONFIG_PATHS.src.root,
							publicPath: CONFIG_PATHS.output.root,
						}
					}
				]
			},
			// Sass
			{
				test: /\.scss$/,
				include: CONFIG_PATHS.src.styles,
				use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: OPTIONS.minimize,
								sourceMap: OPTIONS.sourceMap,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: OPTIONS.sourceMap,
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: OPTIONS.sourceMap,
							}
						}
					]
				}))
			},
			// HTML using EJS templates
			{
				test: /\.ejs$/,
				loader: 'ejs-compiled-loader',
				include: CONFIG_PATHS.src.html,
			},
			// JS linter
			{
				enforce: 'pre',
				test: /\.js$/,
				include: CONFIG_PATHS.src.scripts,
				exclude: [/node_modules/, /vendor/],
				loader: 'eslint-loader',
			},
			// JS transpiler
			{
				test: /\.js$/,
				include: CONFIG_PATHS.src.scripts,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						compact: OPTIONS.minimize,
					}
				}
			}
		]
	}
};
