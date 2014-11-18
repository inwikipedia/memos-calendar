define([], function () {
    "use strict";

    function addZero(n) {
        return n < 10 ? "0" + n : n;
    }
    return function (date) {
        var year = date.getFullYear(),
            month = date.getMonth() + 1,
            day = date.getDate();

        return year + "-" + addZero(month) + "-" + addZero(day);
    }
});