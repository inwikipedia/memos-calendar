/*
* Validate files with JSHint.
* https://github.com/gruntjs/grunt-contrib-jshint
* */
(function () {
    "use strict";

    module.exports =  {
        options: {
            jshintrc: ".jshintrc"
        },
        files: {
            src: ["Gruntfile.js", "build/assets/js/app/**/*.js"]
        }
    };
}());