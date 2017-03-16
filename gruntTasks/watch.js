module.exports = (function () {
	return {
		dev: {

			files: ['<%= config.srcDir %>/**/*'],

			tasks: 
			[
				'sass:dev',
				'processhtml:dev',
				'copy:dev'
			],

			options: {
				interrupt: true
			}
		}
	};
})();