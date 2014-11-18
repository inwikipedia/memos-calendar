/*
* Minify HTML
* https://github.com/gruntjs/grunt-contrib-htmlmin
* */
(function () {
    "use strict";

    module.exports = {
        build: {
            options: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeOptionalTags: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true
            },
            files: [
                {
                    expand: true,
                    cwd: "build",
                    src: ["{,*/}*.html"],
                    dest: "build",
                    ext: ".html"
                }
            ]
        }
    };
}());