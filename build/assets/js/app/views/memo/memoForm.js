define([
    "jquery",
    "underscore",
    "backbone",
    "../../helpers/template",
    "models/memo",
    "collections/memos"
], function ($, _, Backbone, helpers, Memo, memos) {
    "use strict";

    return Backbone.View.extend({
        tagName: "form",
        className: "form",
        template: helpers.template("memoFormTemplate"),
        events: {
            "click .modal, .modal__close": "close"
        },
        initialize: function ($element) {
            this.data = {
                date: {
                    year: $element.data("year"),
                    month: $element.data("month"),
                    day: $element.data("day")
                }
            };
            this.$el.on("click", ".button_type_submit", _.bind(function () {
                if (this.findedMemo) {
                    this.updateMemo();
                } else {
                    this.createMemo();
                }
                this.body.removeClass("modal-wrap");
                this.remove();
            }, this));
            this.findedMemo = memos.find(function (model) {
                var isElementYearEqualsMemoYear = model.get("date").year === this.data.date.year,
                    isElementMonthEqualsMemoMonth = model.get("date").month === this.data.date.month,
                    isElementDayEqualsMemoDay = model.get("date").day === this.data.date.day;

                return isElementYearEqualsMemoYear && isElementMonthEqualsMemoMonth && isElementDayEqualsMemoDay;
            }, this);
            this.data.button_text = !this.findedMemo ? "Create memo" : "Update memo";
            this.body = $("body").addClass("modal-wrap");
        },
        updateMemo: function () {
            var newAttributes = this.newAttributes();

            this.findedMemo.set({
                description: newAttributes.memo
            });
            return false
        },
        createMemo: function () {
            var newMemo,
                newAttributes = this.newAttributes();

            newMemo = new Memo({
                date: this.data.date,
                description: newAttributes.memo
            });
            memos.create(newMemo);
            return false;
        },
        newAttributes: function () {
            var data = this.$el.serializeArray(),
                dataJSON = {};

            _.each(data, function (element) {
                dataJSON[element.name] = element.value.trim();
            });
            return dataJSON;
        },
        close: function (event) {
            if(event.target === event.currentTarget) {
                this.body.removeClass("modal-wrap");
                this.remove();
            }
            return false;
        },
        render: function () {
            var descriptionFromMemo = this.findedMemo && this.findedMemo.get("description") || "";

            this.$el.html(this.template(this.data));
            this.$(".field__input[name=memo]").val(descriptionFromMemo);
            return this;
        }
    });
});