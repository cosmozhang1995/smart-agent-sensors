module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/style-mobile.css':'css/style-mobile.scss'
				},
				options: {
					// sourcemap: 'none',
					style: 'expanded',
					bundleExec: false
				}
			}
		},
		watch: {
			styles: {
				files: ['css/*.scss'],
				tasks: ['sass']
			}
		}
	});

	grunt.registerTask('server', 'Launch express server', function() {
		var app = require('./server');
		app.start();
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'server', 'watch']);
}