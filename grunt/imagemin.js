/*
* Minify images
* https://github.com/gruntjs/grunt-contrib-imagemin
* */
(function () {
    "use strict";

    module.exports = {
        build: {
            files: [
                {
                    expand: true,
                    cwd: "build",
                    src: [
                        "assets/img/**/*.{png,jpg,gif}",
                        "assets/styles/img/**/*.{png,jpg,gif}"
                    ],
                    dest: "build"
                }
            ]
        }
    };
}());