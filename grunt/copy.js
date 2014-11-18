/*
 * Copy files and folders.
 * ttps://github.com/gruntjs/grunt-contrib-copy
 * */
(function () {
    "use strict";

    module.exports = {
        build: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: "dev/desktop.blocks",
                    src: ["**/*.{png,jpg,gif}"],
                    dest: "build/assets/styles/img"
                },
                {
                    expand: true,
                    flatten: true,
                    cwd: "dev/desktop.bundles/img",
                    src: ["**/*.{png,jpg,gif}"],
                    dest: "build/assets/img"
                },
                {
                    expand: true,
                    cwd: "dev/desktop.blocks/fonts",
                    src: ["**", "!**/*.styl"],
                    dest: "build/assets/styles/fonts"
                }
            ]
        },
        libs: {
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: "bower/components",
                    src: ["jquery/**/jquery*min.js"],
                    dest: "build/assets/js/libs/jquery"
                },
                {
                    expand: true,
                    flatten: true,
                    cwd: "bower/components",
                    src: ["underscore/**/underscore*min.js"],
                    dest: "build/assets/js/libs/underscore"
                },
                {
                    expand: true,
                    flatten: true,
                    cwd: "bower/components",
                    src: ["backbone/**/backbone.js"],
                    dest: "build/assets/js/libs/backbone"
                },
                {
                    expand: true,
                    flatten: true,
                    cwd: "bower/components",
                    src: ["backbone.localstorage/**/*min.js"],
                    dest: "build/assets/js/libs/backbone"
                },
                {
                    expand: true,
                    flatten: true,
                    cwd: "bower/components",
                    src: ["requirejs/**/require.js"],
                    dest: "build/assets/js/libs/requirejs"
                }
            ]
        }
    };
}());