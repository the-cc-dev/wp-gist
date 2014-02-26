module.exports = function (grunt) {

    'use strict';

    grunt.initConfig({
        config: {
            paths: {
                bower: 'bower_components',
                temp: 'temp'
            },
            version: {
                from: '2.1.0',
                to: '2.2.0'
            }
        }
    });

};