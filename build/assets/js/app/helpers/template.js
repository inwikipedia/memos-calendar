define([
    "jquery",
    "underscore"
], function ($, _) {
    "use strict";

    return {
        template: function (id) {
            return _.template($("#" + id).html());
        }
    };
});