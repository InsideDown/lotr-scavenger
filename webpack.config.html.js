const chalk = require('chalk');
const glob = require('glob');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const CONFIG_PATHS = require('./webpack.config.paths');

const Plugins = []; // Placeholder for all HtmlWebPackPlugin(s)

/**
 * Create HtmlWebPackPlugin and add it to Plugins array
 * @param  {String} strFilePath Full path to ejs src file (e.g. /project/path/src/html/subpage/index.ejs)
 */
function createPlugin(strFilePath) {
	let filePath = strFilePath;
	let fileName = strFilePath.replace(`${CONFIG_PATHS.src.html}/`.replace(/\\/g, '/'), '');
	let htmlName = fileName.replace('.ejs', '.html');

	Plugins.push(
		new HtmlWebPackPlugin({
			template: filePath,
			filename: htmlName,
			inject: false,
		})
	);

	// Output our progress to terminal
	console.log(chalk.green('HtmlWebPackPlugin created for: ') + chalk.blue(fileName));
};

/**
 * Get array of all file paths
 * Create HtmlWebPackPlugin for each one
 * @param  {String} pattern glob pattern to search for files
 * @param  {Object} options glob options
 */
function getFiles(pattern, options) {
	let arrayFilePaths = glob.sync(pattern, options);

	arrayFilePaths.forEach(function(filePath) {
		createPlugin(filePath);
	});
};

// Init our module
getFiles(
	`${CONFIG_PATHS.src.html}/**/*.ejs`, {
	ignore: `${CONFIG_PATHS.src.html}/_includes/**`
});

module.exports = Plugins;
