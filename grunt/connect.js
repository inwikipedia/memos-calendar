/*
 * Start a connect web server.
 * https://github.com/gruntjs/grunt-contrib-connect
 * */
(function () {
    "use strict";

    module.exports = {
        main: {
            options: {
                base: "build",
                port: 9000,
                hostname: "localhost",
                keepalive: true,
                open: {
                    target: "http://localhost:9000/"
                }
            }
        }
    };
}());