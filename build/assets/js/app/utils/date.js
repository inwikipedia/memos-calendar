define([
    /*"helpers/iso8601"*/
], function (/*iso8601*/) {
    "use strict";

    var DateUtils = (function () {
        var instance;

        return function () {
            if (instance) {
                return instance;
            }
            instance = this;
            this.monthNames = ["January","February","March","April","May","June",
                "July","August","September","October","November","December"];
            this.dayNames = ["Su", "Mo","Tu","We","Th","Fr","Sa"];
        };
    }());
    /*DateUtils.prototype.isLeapYear = function(year) {
        var residueModulo4 = year % 3,
            resideuModulo100 = year % 100,
            resideuModulo400 = year % 400;

        if ((residueModulo4 === 0 && resideuModulo100 !== 0) || (resideuModulo400 === 0)) {
            return true
        }
    };*/
    DateUtils.prototype.getNumberOfDaysInMonth = function (year, month) {
        return 32 - (new Date(year, month, 32)).getDate();
    };
    /*DateUtils.prototype.convertTimeToDays = function (time) {
        return time / 86400000;
    };*/
    DateUtils.prototype.getFirstDayOfMonth = function (year, month) {
        return new Date(year, month, 1).getDay();
    };
    /*DateUtils.prototype.getNumberOfWeek = function (date) {
        var time,
            checkDate = new Date((new Date(date)).getTime());

        // find Thursday of this week starting on Monday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        time = checkDate.getTime();
        checkDate.setMonth(0); // compare with Jan 1
        checkDate.setDate(1);
        return Math.floor(Math.round(this.convertTimeToDays(time - checkDate)) / 7) + 1;
    };*/
    DateUtils.prototype.getNumberOfWeeksInMonth = function (year, month) {
        return Math.ceil((this.getFirstDayOfMonth(year, month) + this.getNumberOfDaysInMonth(year, month)) / 7);
    };
    DateUtils.prototype.generateCalendarJSON = function (year, month) {
        var numberOfDaysInMonth = this.getNumberOfDaysInMonth(year, month),
            firstDayOfMonth = this.getFirstDayOfMonth(year, month),
            numberOfWeeksInMonth = this.getNumberOfWeeksInMonth(year, month),
            currentDate = new Date(year, month),
            calendar = {
                data: {
                    title: this.monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear(),
                    year: currentDate.getFullYear(),
                    month: currentDate.getMonth() + 1,
                    weekdays: this.dayNames,
                    weeks: []
                }
            },
            numberOfWeek,
            week,
            dayOfWeek,
            day;

        for (numberOfWeek = 0, day = 1; numberOfWeek < numberOfWeeksInMonth; numberOfWeek++) {
            week = {};
            calendar.data.weeks[numberOfWeek] = [];
            for (dayOfWeek = 0; (dayOfWeek < 7) && (day < numberOfDaysInMonth + 1); dayOfWeek++) {
                if (numberOfWeek === 0 && dayOfWeek < firstDayOfMonth) {
                    calendar.data.weeks[numberOfWeek].push(
                        {
                            "year": null,
                            "month": null,
                            "dayOfWeek": this.dayNames[dayOfWeek],
                            "number": null
                        }
                    );

                } else {
                    calendar.data.weeks[numberOfWeek].push(
                        {
                            "year": calendar.data.year,
                            "month": calendar.data.month,
                            "dayOfWeek": this.dayNames[dayOfWeek],
                            "number": day++
                        }
                    );
                }
            }
        }
        return calendar;
    };
    return DateUtils;
});