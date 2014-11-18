(function () {
    "use strict";

    module.exports = {
        "default": ["build"],
        //"lint": ["jshint"],
        "css:dev": [
            "stylus:dev"
        ],
        "css:build": [
            "stylus:build"
        ],
        /*"html:dev": [
            "jade:dev"
        ],
        "html:build": [
            "jade:build",
            "htmlmin:build"
        ],
        "minimages": [
            "copy:build",
            "imagemin:build"
        ],*/
        "libs": [
            "copy:libs"
        ],
        "build": []
    };
}());