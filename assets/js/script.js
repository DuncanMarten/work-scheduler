// Set current date to html doc
var setDay = function() {
    var today = moment().format("dddd MMMM Do");
    $("#currentDay").append(today);
}
setDay();

var currentTime = moment().format("LT");

var auditHour = function() {
    
    var hour = $(".container").find(".time").text().trim();
    var time = moment(hour, "LT");

    console.log(time);
    $(".time").removeClass("past present future");

    if (moment().isAfter(time)) {
        $(".time").addClass("past");
    }
    else if(moment().isBefore(time)) {
        $(".time").addClass("future");
    }
    else if(moment().is(time)) {
        $(".time").addClass("present");
    }
}
auditHour();