/*
* Compile Stylus files to CSS.
* https://github.com/gruntjs/grunt-contrib-stylus
* */
(function () {
    "use strict";

    module.exports = {
        dev: {
            options: {
                use: [
                    function () {
                        return require("autoprefixer-stylus")({browsers: ["last 3 version"]});
                    }
                ],
                compress: false
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: "dev/bundles",
                    src: ["{,*/}*.styl"],
                    dest: "build/assets/styles",
                    ext: ".css"
                }
            ]
        },
        build: {
            options: {
                use: [
                    function () {
                        return require("autoprefixer-stylus")({browsers: ["last 3 version"]});
                    },
                    function () {
                        return require('csso-stylus');
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: "dev/bundles",
                    src: ["{,*/}*.styl"],
                    dest: "build/assets/styles",
                    ext: ".css"
                }
            ]
        }
    };
}());