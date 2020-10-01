// Set current date to html doc
var setDay = function() {
    var today = moment().format("dddd MMMM Do");
    $("#currentDay").append(today);
}
setDay();

var currentTime = moment().format("LT");


// update textarea to show if 
var auditHour = function() {

    var spanVal = document.querySelectorAll("span");

    for (var i = 0; i < spanVal.length; i++) {
        var hour = $(spanVal[i]).text();
        console.log(hour);
        $("textarea").removeClass("past present future");

        if (moment().isAfter(hour)) {
            $("textarea").addClass("past");
        }
        else if(moment().isBefore(hour)) {
            $("textarea").addClass("future");
        }
        //else if(moment().is(spanVal)) {
            //$("textarea").addClass("present");
        //}
    }
}
auditHour();




// var list = JSON.parse(localStorage.getItem("tasklist")) || [];

// function renderTasks(list) {

// }





// $(".saveBtn").on("click", function(event) {
//     event.preventDefault();

//     localStorage.setItem("tasklist", JSON.stringify(list));

// });

var timeTask = [];
