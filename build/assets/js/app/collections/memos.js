define([
    "jquery",
    "underscore",
    "backbone",
    "../models/memo",
    "localstorage"
], function ($, _, Backbone, Memo) {
    "use strict";

    var Memos = Backbone.Collection.extend({
        model: Memo,
        localStorage: new Backbone.LocalStorage("NotesCollection"),
        initialize: function () {
            this.listenTo(this, "remove", this.deleteMemo);
        },
        deleteMemo: function (model) {
            model.trigger("delete");
        }
    });
    return new Memos();
});