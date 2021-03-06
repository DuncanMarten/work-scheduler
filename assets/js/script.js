// Set current date to html doc
var setDay = function() {
    // today's date
    var today = moment().format("dddd MMMM Do");
    $("#currentDay").append(today);
}

// arrays for task text and placement
var timeTask = [];
var placeTask = [];

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
        console.log(Math.abs(moment().diff(time, "hour")) === 0);

        
        // assign .present if time is equal to moment
        if(Math.abs(moment().diff(time, "hour")) === 0) {
            $(".task" + i).addClass("present");
       }
        
        // assign .past if time has passed
        else if(moment().isAfter(time)) {
            $(".task" + i).addClass("past");
        }

        // assign .future if time is still to come
        else if(moment().isBefore(time)) {
            $(".task" + i).addClass("future");
        }

    }
}


// loop through each textarea element
$("textarea").each(function(i) {
    // for click on save button in designated row do ..
    $("#row" + i).on("click", ".saveBtn", function(event){
        
        // set list to value of textarea
        var list = $(".task" + i).val();
        // set place to .task plus index
        var place = ".task" + i;
        console.log(timeTask);

        // push variables to arrays
        timeTask.push(list);
        placeTask.push(place);
        console.log(timeTask);

        // store arrays locally
        localStorage.setItem("tasklist", JSON.stringify(timeTask));
        localStorage.setItem("placement", JSON.stringify(placeTask));
    })
})

// Render localstorage task list
function renderTasks() {
    
    // pull and parse localStorage into tasks
    timeTask = JSON.parse(localStorage.getItem("tasklist"));
    placeTask = JSON.parse(localStorage.getItem("placement"));
    
    // Loop through each task array item
    for (i = 0; i < timeTask.length; i++) {
        // append task text to placement id
        $(placeTask[i]).append(timeTask[i]);
    }

    if(!timeTask || !placeTask) {
        timeTask = [];
        placeTask = [];
    }
}

// calling functions
setDay();
auditHour();
renderTasks();

// every 15 minutes run auditHour function
setInterval(function() {
    auditHour();
}, (15 * 60 * 1000));