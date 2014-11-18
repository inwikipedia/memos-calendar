define([
    "jquery",
    "underscore",
    "backbone",
    "../../helpers/template",
    "../../views/memo/memo"
], function ($, _, Backbone, helpers, MemoView) {
    "use strict";

    return Backbone.View.extend({
        initialize: function () {
            this.listenTo(this.collection, "add", this.addOne);
            this.listenTo(this.collection, "reset", this.addAll);
        },
        addOne: function (model) {
            var memoView = new MemoView({model: model}),
                context = "[data-day=" + model.get("date").day + "]";

            $(".memo-list", context).html(memoView.render().el);
        },
        addAll: function () {
            var currentYear = this.calendar.data.year,
                currentMonth = this.calendar.data.month;

            this.collection.chain()
                .filter(function (model) {
                    var isCurrentYearEqualsMemoYear = model.get("date").year === currentYear,
                        isCurrentMonthEqualsMemoMonth = model.get("date").month === currentMonth;

                    return isCurrentYearEqualsMemoYear && isCurrentMonthEqualsMemoMonth;
                }, this)
                .map(function (model) {
                    return this.addOne(model);
                }, this);
        },
        render: function (calendar) {
            this.calendar = calendar;
            this.$el.empty();
            this.addAll();
            return this;
        }
    });
});