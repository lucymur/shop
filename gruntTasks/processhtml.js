module.exports = (function (grunt, globalOption) {
    var path = require('path');
    var config = globalOption.config;
    var files = globalOption.config.files;
    var htmlFiles = {};
    var devJsFiles = [];
    var devCssFiles = [];

    config.files.js.vendor.forEach(function (file) {
        devJsFiles.push( path.join( config.buildVendorDir, file ) );
    });

    config.files.js.source.forEach(function (file) {
        devJsFiles.push(file);
    });

    config.files.css.vendor.forEach(function (file) {
        devCssFiles.push( path.join( config.buildVendorDir, file ) );
    });

    files.html.forEach(function (filePath) {
        htmlFiles[ path.join( config.buildDevDir, filePath ) ] = [ path.join( config.htmlDir, filePath ) ];
    });

    return {
        dev: {
            options: {
                process: true,
                data: {
                    config: globalOption.config,
                    package: globalOption.package,
                    devJsFiles: devJsFiles,
                    devCssFiles: devCssFiles
                }
            },
            files: htmlFiles
        }
    }
});