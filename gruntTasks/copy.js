module.exports = function (grunt, globalOption) {
	var path = require('path');
	var config = globalOption.config;
	var files = globalOption.config.files;

	var devVendorFiles = ([])
		.concat( files.js.vendor )
		.concat( files.css.vendor )
		.concat( files.copy.vendor )
	;

	var devSourceFiles = ([])
		.concat( files.copy.source )
		.concat( files.js.source )
	;

	return {
		dev: {
			files: [
				{
					expand: true,
					filter: 'isFile',
					cwd: "<%= config.vendorDir %>",
					src: devVendorFiles,
					dest: path.join( config.buildDevDir, config.buildVendorDir )
				},
				{
					expand: true,
					filter: 'isFile',
					cwd: "<%= config.srcDir %>",
					src: devSourceFiles,
					dest: '<%= config.buildDevDir %>'
				}
			]
		}
	}
};