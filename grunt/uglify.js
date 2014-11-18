/*
 * Minify files with UglifyJS.
 * https://github.com/gruntjs/grunt-contrib-uglify
 * */
(function () {
    "use strict";

    module.exports = {
        build: {
            files: [
                {
                    expand: true,
                    cwd: "build/assets/js",
                    src: ["**/*.js"],
                    dest: "build/assets/js"
                }
            ]
        }
    };
}());