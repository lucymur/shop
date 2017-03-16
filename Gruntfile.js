module.exports = function(grunt) {
  var path = require('path');
  var buildConfig = require( path.join(process.cwd(), 'build.config.js') );

  require('time-grunt')(grunt);

  require('jit-grunt')(grunt, {
    includereplace: 'grunt-include-replace'
  });

  require('load-grunt-config')(grunt, {
    jitGrunt: true,
    data: {
      config: buildConfig(),
      concatObjectPath: concatObjectPath
    },
    pkg: grunt.file.readJSON('package.json'),
    configPath: path.join(process.cwd(), 'gruntTasks')
  });

  function concatObjectPath (option) {
    var srcPrefix = option.srcPrefix;
    var outPrefix = option.outPrefix;
    var pathObject = option.pathObject;
    var compiledFiles = {};

    Object.keys(pathObject).forEach(function (outPath) {
      var outPath = outPath;
      var scrPath = pathObject[outPath];

      var comlpiledSrcPath = path.join( srcPrefix, scrPath );
      var comlpiledOutPath = path.join( outPrefix, outPath );

      compiledFiles[ comlpiledOutPath ] = comlpiledSrcPath;
    });

    return compiledFiles;
  }
};
