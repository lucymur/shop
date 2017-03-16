module.exports = {
	dev: {
		options: {
			port: 3001,
			hostname: "0.0.0.0",
			bases: ['<%= config.buildDevDir %>']
		}
	}	
};