/*
* Optimize RequireJS projects using r.js.
* https://github.com/gruntjs/grunt-contrib-requirejs
* */
(function () {
    "use strict";

    module.exports = {
        build: {
            options: {
                baseUrl: "build/assets/js/app",
                name: "config",
                mainConfigFile: "build/assets/js/app/config.js",
                out: "build/assets/js/app/optimized.js"
            }
        }
    };
}());