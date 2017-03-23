module.exports = function () {
	return {
		srcDir: 'src',
		buildDir: 'build',
		vendorDir: 'node_modules',
		buildVendorDir: 'vendor',
		buildDevDir: '<%= config.buildDir %>/dev',
		buildProdDir: '<%= config.buildDir %>/prod',
		htmlDir: '<%= config.srcDir %>/html',

		files: {
			js: {
				vendorOut: 'javascript/vendor.min.js',
				sourceOut: 'javascript/script.min.js',

				vendor: [
					'jquery/dist/jquery.min.js',
					'materialize-css/dist/js/materialize.min.js',
					'bxslider/dist/jquery.bxslider.js',
          			'fancybox/dist/js/jquery.fancybox.pack.js'
				],

				source: [
					'javascript/scripts.js'
				]
			},

			css: {
				vendorOut: 'stylesheets/vendor.min.css',

				vendor: [
					'fancybox/dist/css/jquery.fancybox.css',
					'bxslider/dist/jquery.bxslider.min.css'
				]
			},

			html: [
				'index.html',
                'contact.html',
                'katalog.html',
                
			],

			sass: {
				'stylesheets/style.css': 'sass/style.scss'
			},

			copy: {
				source: [
					'images/**/*',
					'fonts/**/*'
				],

				vendor: [
					'materialize-css/fonts/**/*',
					'font-awesome/fonts/**/*'
				]
			}
		}
	}
};