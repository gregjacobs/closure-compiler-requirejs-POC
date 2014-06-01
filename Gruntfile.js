/*global require, module */
/*jshint devel:true, node:true, strict:false */

module.exports = function( grunt ) {
	
	// Configurations
	/*var jsDir = process.cwd() + '/js',  // for some reason, grunt (or node) doesn't start Java in the current working directory, so need to use absolute paths for files passed as arguments to it
		jsBuildDir = process.cwd() + '/output',
		bowerDir = process.cwd() + '/bower_components',
		
		requireJsOutputDir = jsBuildDir + '/requireJsOutput';
	*/
	
	
	// Configurations
	var jsDir = 'js',
		jsBuildDir = 'output',
		bowerDir = 'bower_components',
		
		requireJsOutputDir = jsBuildDir + '/requireJsOutput';
	
	
	// Register main tasks
	grunt.registerTask( 'default', "Default task runs JSHint and then builds the project.", 
		[ 'build' ] );
	
	grunt.registerTask( 'build', "Builds the concatenated/minified JavaScript and CSS files",
		[ 'js' ] );

	grunt.registerTask( 'js', "Builds both using UglifyJS and Closure", 
		[ 'doClosure', 'doRequirejs' ] );
	
	
	grunt.registerTask( 'doClosure', "Uses the Closure compiler to build the output file",
		[ 'jshint', 'copy:beforeClosureCompiler', 'closureCompiler:dist' ] );
	
	grunt.registerTask( 'doRequirejs', "Uses the RequireJS optimizer and UglifyJS to build the output file",
		[ 'jshint', 'requirejs:compile', 'uglify:dist' ] );
	
	
	
	
	// -----------------------------------
	
	// Project configuration
	grunt.initConfig( {
		
		jshint: {
			files: [ 'Gruntfile.js', jsDir + '/**/*.js' ],
			
			options : {
				'smarttabs' : true,
				'undef'     : true,
				'devel'     : true
			}
		},

		
		requirejs : {
			compile : {
				// Accepts same options as RequireJS optimizer build file.
				// Example of all available options at: https://github.com/jrburke/r.js/blob/master/build/example.build.js
				options : {
					baseUrl: jsDir,
					name: "main",
					dir: requireJsOutputDir,  // Used in the "done" handler of the requirejs:compile task

					logLevel: 2,  // 0=trace, 1=info, 2=warn, 3=error, 4=silent
					optimize: 'none',

					skipDirOptimize: true,       // don't optimize all of the individual files that are copied to the build dir - just optimize the "bundle" files (if `optimize` is set to something other than "none")
					normalizeDirDefines: "skip", // since we don't load individual files, we only need to worry about the bundle files
					
					paths : {
						'Class' : '../bower_components/Class-js/src/Class'
					}
				}
			}
		},
		
		
		uglify : {
			dist : {
				options: {
					preserveComments : 'none'
				},
				files : (function() {
					var obj = {};
					obj[ jsBuildDir + '/PersonTest-out-requirejs.js' ] = [ requireJsOutputDir + '/main.js' ];
					
					return obj;
				} )()
			}
		},
		
		
		copy : {
			beforeClosureCompiler : {
				files: [
					{ src: [ 'bower_components/Class-js/src/Class_no_UMD.js' ], dest: 'output/closurePreProcess/Class.js' },
					{ expand: true, cwd: 'js/', src: [ '**/*.js' ], dest: 'output/closurePreProcess/' }
				]
			}
		},
		
		
		closureCompiler:  {

			options: {
				// [REQUIRED] Path to closure compiler
				compilerFile: 'compiler.jar',
		
				// [OPTIONAL] set to true if you want to check if files were modified
				// before starting compilation (can save some time in large sourcebases)
				//checkModified: true,
		
				// [OPTIONAL] Set Closure Compiler Directives here
				compilerOpts: {
					compilation_level: 'ADVANCED_OPTIMIZATIONS',
					formatting: 'PRETTY_PRINT',
					warning_level: 'verbose',
					jscomp_off: ['checkTypes', 'fileoverviewTags'],
					summary_detail_level: 3,
					//output_wrapper: '"(function(){%output%}).call(this);"',
					transform_amd_modules: null,
					process_common_js_modules: null,
					common_js_entry_module: jsBuildDir + '/closurePreProcess/main.js',
					common_js_module_path_prefix: 'output/closurePreProcess/'
				},
				
				// [OPTIONAL] Set exec method options
				execOpts: {
					/**
					 * Set maxBuffer if you got message "Error: maxBuffer exceeded."
					 * Node default: 200*1024
					 */
					maxBuffer: 999999 * 1024
				},
				
				// [OPTIONAL] Java VM optimization options
				// see https://code.google.com/p/closure-compiler/wiki/FAQ#What_are_the_recommended_Java_VM_command-line_options?
				// Setting one of these to 'true' is strongly recommended,
				// and can reduce compile times by 50-80% depending on compilation size
				// and hardware.
				// On server-class hardware, such as with Github's Travis hook,
				// TieredCompilation should be used; on standard developer hardware,
				// d32 may be better. Set as appropriate for your environment.
				// Default for both is 'false'; do not set both to 'true'.
				d32: false, // will use 'java -client -d32 -jar compiler.jar'
				TieredCompilation: false // will use 'java -server -XX:+TieredCompilation -jar compiler.jar'
			},
		
			dist: {
				// [OPTIONAL] Target files to compile. Can be a string, an array of strings
				// or grunt file syntax (<config:...>, *)
				src: [ jsBuildDir + '/closurePreProcess/**/*.js' ],
		
				// [OPTIONAL] set an output file
				dest: jsBuildDir + '/PersonTest-out-closure.js'
			}
		}
		
	} );
	

	// These plugins provide the tasks
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-requirejs' );
	grunt.loadNpmTasks( 'grunt-closure-tools' );
	
};
