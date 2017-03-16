module.exports = function (grunt, globalOption) {
	var path = require('path');
	var sassFiles = globalOption.config.files.sass;

	var compiledSassFileDev = globalOption.concatObjectPath({
		srcPrefix: globalOption.config.srcDir,
		outPrefix: globalOption.config.buildDevDir,
		pathObject: globalOption.config.files.sass
	});

	var compiledSassFileProd = globalOption.concatObjectPath({
		srcPrefix: globalOption.config.srcDir,
		outPrefix: globalOption.config.buildProdDir,
		pathObject: globalOption.config.files.sass
	});

	return {
	    dev: {
	        options: {
				sourcemap: 'true',
				style: 'compact'
	        },

	        files: compiledSassFileDev
	    },

		prod: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},

			files: compiledSassFileProd
		}
	}
};