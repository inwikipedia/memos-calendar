define([
    "jquery",
    "underscore",
    "backbone",
    "../../helpers/template",
    "../../views/memo/memoForm"
], function ($, _, Backbone, helpers, MemoFormView) {
    "use strict";

    return Backbone.View.extend({
        tagName: "div",
        className: "calendar",
        template: helpers.template("calendarTemplate"),
        events: {
            "click .calendar__next-month": "goToNextMonth",
            "click .calendar__prev-month": "goToPreviousMonth",
            "dblclick .calendar__day": "showMemoForm"
        },
        initialize: function (calendar) {
            this.calendar = calendar;
        },
        goToNextMonth: function () {
            Backbone.trigger("calendar:nextMonth");
            return false;
        },
        goToPreviousMonth: function () {
            Backbone.trigger("calendar:previousMonth");
            return false;
        },
        showMemoForm: function (event) {
            var $target = $(event.currentTarget),
                form;

            if($target.data("day")) {
                form = new MemoFormView($(event.currentTarget));
                $("main").append(form.render().el);
            }
        },
        render: function () {
            this.$el.html(this.template(this.calendar));
            return this;
        }
    });
});