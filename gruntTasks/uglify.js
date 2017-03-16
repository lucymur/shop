module.exports = function () {
	return {
		dev: {
			expand: true,
			cwd: '<%= config.srcDir %>',
			 files: {
			 	'<%= config.buildDevDir %>/javascript/vendor.min.js':
			 	[
			 		'<%= config.vendorDir %>/jquery/dist/jquery.min.js'
			 	]
			 }
		},

		prod: {
			expand: true,
			cwd: '<%= config.srcDir %>',
			files: {
				'<%= config.buildDevDir %>/javascript/vendor.min.js':
				[
					'<%= config.vendorDir %>/jquery/dist/jquery.min.js'
				]
			}
		}
	}
};