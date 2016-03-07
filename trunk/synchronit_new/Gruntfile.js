'use strict';

module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Configurable paths
	var config = {
		basePath : '.',
		distPath : "dist",
		distJs : "dist/js",
		distCss : "dist/css",
		distImg : "dist/images",
		bowerRoot : 'bower_components',
		browsers : [ 'IE 9-11', 'Chrome >= 30', 'Firefox >=40', 'Safari >= 7',
				'ChromeAndroid >= 30', 'iOS >= 7' ]
	};

	// Define the configuration for all the tasks
	grunt
			.initConfig({

				// Project settings
				config : config,

				// Watches files for changes and runs tasks accordingly
				watch : {
					js : {
						files : [ config.basePath + '/js/**/*.js',
								config.basePath + '/!dist/*.js' ],
						tasks : [ 'build-js:dev' ]
					},
					css : {
						files : [ config.basePath + '/css/*.less',
								config.basePath + '/css/**/*.less' ],
						tasks : [ "build-css:dev" ]
					}
				},

				karma : {
					unit : {
						configFile : 'test/webapp/karma.conf.js'
					}
				},

				/*
				 * START css compilation
				 * ***************************************************
				 */
				less : {
					options : {
						paths : [ config.basePath + '/css' ],
						strictImports : true,
						strictUnits : true
					},
					dev : {
						options : {
							sourceMap : true
						},
						files : {
							"dist/css/synchronit.min.css" : config.basePath
									+ "/css/styles.less"
						}
					},
					prod : {
						options : {
							sourceMap : false
						},
						files : {
							"dist/css/synchronit.min.css" : config.basePath
									+ "/css/styles.less"
						}
					}
				},
				postcss : {
					options : {

						parser : require('postcss-scss')

					},
					dev : {
						src : config.distCss + '/synchronit.min.css',
						options : {
							processors : [

							require('pixrem')(), require('autoprefixer')({
								browsers : config.browsers
							}) /*
								 * , require('postcss-sprites')({ spritePath:
								 * "./" + config.distImg+ "/sprite.png",
								 * stylesheetPath: "./" + config.distCss + "/" })
								 */]
						}
					},
					prod : {
						options : {
							processors : [

							require('postcss-urlrewrite')({
								rules : []
							}), require('pixrem')(), require('autoprefixer')({
								browsers : config.browsers
							})/*
								 * , require('postcss-sprites')({ spritePath:
								 * "./" + config.distImg + "/sprite.png",
								 * stylesheetPath: "./" + config.distCss + "/" })
								 */, require('cssnano')() ]
						},
						src : config.distCss + '/synchronit.min.css'
					},
					bower : {
						options : {
							processors : [

							require('pixrem')(), require('autoprefixer')({
								browsers : config.browsers
							}), require('postcss-urlrewrite')({
								rules : [
								// { from: '../fonts/', to: './fonts/' }

								]

							}), require('cssnano')() ]
						},
						src : config.distCss + "/_bower.min.css"
					}
				},
				/*
				 * END css compilation
				 * ***************************************************
				 */

				copy : {
					bower : {
						files : [ {
							expand : true,
							flatten : true,
							src : [ config.bowerRoot
									+ '/bootstrap/dist/fonts/*' ],
							dest : config.distPath + '/fonts/'
						} ]

					}
				},
				/*
				 * START minification - compression
				 * ***************************************************
				 */
				concat : {
					options : {
						sourceMap : true

					},
					dev : {
						files : {
							'dist/js/synchronit.js' : [
									config.basePath + '/js/jquery.onscreen.min.js',
									config.basePath + '/js/jQuery.appear.js',
									config.basePath + '/js/jquery.flexslider-min.js',
									//config.basePath + '/js/jquery.easing.1.3',
									config.basePath + '/js/disableScroll.js',
									config.basePath + '/js/dialog.jquery.js',
									config.basePath + '/js/main.js',
									config.basePath + '/js/map.js',
									config.basePath + '/js/headerWithSlider.js',
									config.basePath + '/js/tooltips.js',
									config.basePath + '/js/dialogs.js',
									config.basePath + '/js/sections/team.js']
						}
					},
					bower : {
						files : {
							'dist/js/_bower.js' : [
							        config.bowerRoot
							        	+ "/jquery/dist/jquery.min.js",
									config.bowerRoot
											+ "/jquery-ui/ui/minified/core.min.js",
									config.bowerRoot
											+ "/jquery-ui/ui/minified/widget.min.js",
									config.bowerRoot
											+ "/jquery.easing/js/jquery.easing.min.js",
									config.bowerRoot
											+ "/tooltipster/js/jquery.tooltipster.min.js",
												],
							'dist/css/_bower.min.css' : [
							      config.bowerRoot
									+ "/tooltipster/css/tooltipster.css",
								//	config.basePath + '/css/headerWithSlider.css',
									config.basePath + '/css/font-awesome.min.css',
									config.basePath + '/css/slidedeck.skin.css'

							]
						}

					}

				},

				uglify : {
					options : {
						mangle : false
					},
					dev : {
						options : {
							sourceMap : true,
							sourceMapIncludeSources : false,
							sourceMapIn : config.distJs + '/synchronit.js.map'
						},
						files : {
							'dist/js/synchronit.min.js' : config.basePath
									+ "/dist/js/synchronit.js"
						}

					},
					dist : {
						options : {
							compress : true

						},
						files : {
							'dist/js/synchronit.min.js' : config.basePath
									+ "/dist/js/synchronit.js"
						}

					}

				},

				bower : {
					install : {

					}
				}

			/*
			 * END minification - compression
			 * ***************************************************
			 */
			});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bower-task');

	grunt.registerTask('build-dependencies', function(target) {
		grunt.task.run('bower:install', 'copy:bower', 'concat:bower',
				"postcss:bower");
	});
	grunt.registerTask('serve', function(target) {
		var currentTarget = target ? target : "dev";
		grunt.task.run([ 'minify:' + currentTarget, // 'connect:'
		// +
		// currentTarget,
		'watch' ]);
	});

	grunt.registerTask('build-css', function(target) {
		grunt.task.run([ 'less' + (target ? ':' + target : ''),
				'postcss' + (target ? ':' + target : '') ]);
	});

	grunt.registerTask('build-js', function(target) {
		var currentTarget = target ? ":" + target : ":dev";
		grunt.task.run([ 'concat' + currentTarget, 'uglify' + currentTarget ]);
	});
	grunt.registerTask('build', function(target) {
		grunt.task.run([ 'minify' + (target ? ':' + target : '')
		// ,'test'
		]);
	});

	grunt.registerTask('minify', function(target) {
		var currentTarget = (target ? ':' + target : '');
		grunt.task.run([ 'build-dependencies', 'build-css' + currentTarget,
				'build-js' + currentTarget ]);
	});

	grunt.registerTask('test', function() {
		grunt.task.run([ 'karma' ]);
	});
	grunt.registerTask('default', function(target) {
		grunt.task.run([ 'build' + (target ? ':' + target : '') ]);
	});
};
