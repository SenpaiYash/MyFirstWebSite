$(document).ready(function() {
    $(".page-title-h1").text($(".active-js").text());
});

// search-open-close + animation fade in
function search() {
    const search = $(".search-js");
    if (search.hasClass('search-js-open')) {
        search.hide().removeClass("search-js-open");
    } else {
        search.show().addClass("search-js-open");
    }
}

function calendar() {
    setTimeout(function() {
        var d = new Date();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var year = d.getFullYear();

        //get the current year
        $('#currentYear,#currentYearz').html(year);
        $('#currentMonth,#currentMonthz').html(month);
        $('#currentDay,#currentDayz').html(day);
        $('#prevYear').html(year - 1);
        $('#prevMonth').html(month - 1);
        $('#prevDay').html(day - 1);
        $('#nextYear').html(year + 1);
        $('#nextMonth').html(month + 1);
        $('#nextDay').html(day + 1);
    }, 500);
}

calendar();