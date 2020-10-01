// Set current date to html doc
var setDay = function() {
    var today = moment().format("dddd MMMM Do");
    $("#currentDay").append(today);
}
setDay();

var currentTime = moment().format("LT");

// var auditHour = function() {
//     var hour = $(".container").find(".time").text().trim();
//     var time = moment(hour, "LT");
    
//     console.log(time);
//     $(".time").removeClass("past present future");

//     if (moment().isAfter(time)) {
//         $(".description").addClass("past");
//     }
//     else if(moment().isBefore(time)) {
//         $(".description").addClass("future");
//     }
//     else if(moment().is(time)) {
//         $(".description").addClass("present");
//     }
// }
// auditHour();




// var list = JSON.parse(localStorage.getItem("tasklist")) || [];

// function renderTasks(list) {

// }





// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();

//     localStorage.setItem("tasklist", JSON.stringify(list));

// });