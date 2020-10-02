// Set current date to html doc
var setDay = function() {
    var today = moment().format("dddd MMMM Do");
    $("#currentDay").append(today);
}
setDay();

var currentTime = moment().format("LT");


// update textarea to show if 
var auditHour = function() {
    // find all span
    var spanVal = document.querySelectorAll("span");
    
    // loop through spanVal array to find value of all span elements
    for (var i = 0; i < spanVal.length; i++) {
        // set hour to text content of each span element
        var hour = $(spanVal[i]).text().trim();
        //convert hour to a moment with 0 minutes
        var time = moment(hour, "LT").local().set("minute", 00);
        
        // clear designated classes from textarea element
        $(".task" + i).removeClass("past present future");
    

        // assign .past if time has passed
        if(moment().isAfter(time)) {
            $(".task" + i).addClass("past");
        }

        // assign .future if time is still to come
        else if(moment().isBefore(time)) {
            $(".task" + i).addClass("future");
        }

        else if((Math.abs(Math.abs(moment().get("hour")-24)-12)).isSame(time)) {
             $("textarea").addClass("present");
        }
    }
}
auditHour();

// Render localstorage task list
function renderTasks(timeTask) {
    // pull and parse localStorage into tasks
    var tasks = JSON.parse(localStorage.getItem("tasklist"));
    
    // Loop through each task array item and append it to designated task class
    for (i = 0; i < tasks.length; i++) {
        $(".task" + i).append(tasks[i]);
    }
}
renderTasks();

var timeTask = [];
for (i = 0; i < 9; i++){
$("#row" + i).on("click", "#btn" + i, function(event) {
    event.preventDefault();
    
    var text0 = $(".task0").val();
    var text1 = $(".task1").val();
    var text2 = $(".task2").val();
    var text3 = $(".task3").val();
    var text4 = $(".task4").val();
    var text5 = $(".task5").val();
    var text6 = $(".task6").val();
    var text7 = $(".task7").val();
    var text8 = $(".task8").val();
    
    var tasks = [
        text0, text1, text2, text3, text4, text5, text6, text7, text8
    ]
    console.log(tasks);
    timeTask = tasks;
    localStorage.setItem("tasklist", JSON.stringify(timeTask));
});
}


// localStorage.setItem("tasklist", JSON.stringify(timeTask));
