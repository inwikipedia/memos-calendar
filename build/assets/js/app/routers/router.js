define([
    "jquery",
    "underscore",
    "backbone",
    "utils/date",
    "collections/memos",
    "views/memo/memos",
    "../views/calendar/calendar"
], function ($, _, Backbone, DateUtils, memos, MemosView, CalendarView) {
    "use strict";

    return Backbone.Router.extend({
        initialize: function () {
            var date = new Date();
            this.DataUtils = new DateUtils();
            this.year = date.getFullYear();
            this.month = date.getMonth();
            Backbone.history.start();
            Backbone.on("calendar:nextMonth", this.goToNextMonth, this);
            Backbone.on("calendar:previousMonth", this.goToPreviousMonth, this);
        },
        routes: {
            "": "showDefault",
            "!/:year/:month(/)": "showYearAndMonth"
        },
        goToNextMonth: function () {
            if (this.month !== 11) {
                this.month++;
            } else {
                this.year++;
                this.month = 0;
            }
            Backbone.history.navigate("!/" + this.year + "/" + (this.month + 1) + "/", true);
        },
        goToPreviousMonth: function () {
            if (this.month !== 0) {
                this.month--;
            } else {
                this.year--;
                this.month = 11;
            }
            Backbone.history.navigate("!/" + this.year + "/" + (this.month + 1) + "/", true);
        },
        showDefault: function () {
            Backbone.history.navigate("!/" + this.year + "/" + (this.month + 1) + "/", true);
        },
        showYearAndMonth: function (year, month) {
            var calendar,
                calendarView,
                memosView;

            if (year && month) {
                this.year = year;
                this.month = month - 1;
            }
            calendar = this.DataUtils.generateCalendarJSON(this.year, this.month);
            calendarView = new CalendarView(calendar);
            memosView = new MemosView({
                collection: memos
            });
            $("main").html(calendarView.render().el).append(memosView.render(calendar).el);
        }
    });
});