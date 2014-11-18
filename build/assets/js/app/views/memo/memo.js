define([
    "jquery",
    "underscore",
    "backbone",
    "../../helpers/template"
], function ($, _, Backbone, helpers) {
    "use strict";

    return Backbone.View.extend({
        className: "memo",
        template: helpers.template("memoTemplate"),
        events: {
            "click .memo__delete": "deleteModel"
        },
        initialize: function () {
            this.listenTo(this.model, "delete", this.remove);
            this.listenTo(this.model, "change:description", this.render);
        },
        deleteModel: function () {
            this.model.deleteMemo();
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});