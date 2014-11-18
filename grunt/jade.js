/*
* Compile Jade templates.
* https://github.com/gruntjs/grunt-contrib-jade
* */
(function () {
    "use strict";

    module.exports = {
        dev: {
            options: {
                pretty: true,
                compileDebug: true
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: "dev/bundles",
                    src: ["{,*/}*.jade"],
                    dest: "build",
                    ext: ".html"
                }
            ]
        },
        build: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: "dev/bundles",
                    src: ["{,*/}*.jade"],
                    dest: "build",
                    ext: ".html"
                }
            ]
        }
    };
}());