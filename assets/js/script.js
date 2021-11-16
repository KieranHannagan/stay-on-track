 // moment.js setup, assigning each hour block ID tag with the correct time
$("#currentDay").text(moment().format("dddd, MMMM Do")); 
$("#nine").text(moment('9:00 AM', 'h:mm A').format("LT"));
$("#ten").text(moment('10:00 AM', 'h:mm A').format("LT"));
$("#eleven").text(moment('11:00 AM', 'h:mm A').format("LT"));
$("#twelve").text(moment('12:00 PM', 'h:mm A').format("LT"));
$("#one").text(moment('1:00 PM', 'h:mm A').format("LT"));
$("#two").text(moment('2:00 PM', 'h:mm A').format("LT"));
$("#three").text(moment('3:00 PM', 'h:mm A').format("LT"));
$("#four").text(moment('4:00 PM', 'h:mm A').format("LT"));
$("#five").text(moment('5:00 PM', 'h:mm A').format("LT"));

var hourNine = (moment('9:00 AM', 'h:mm A'));
var hourTen = (moment('10:00 AM', 'h:mm A'));
var hourEleven = (moment('11:00 AM', 'h:mm A'));
var hourTwelve =(moment('12:00 PM', 'h:mm A'));
var hourOne = (moment('1:00 PM', 'h:mm A'));
var hourTwo = (moment('2:00 PM', 'h:mm A'));
var hourThree = (moment('3:00 PM', 'h:mm A'));
var hourFour = (moment('4:00 PM', 'h:mm A'));
var hourFive = (moment('5:00 PM', 'h:mm A'));
var saveButton = $(".saveBtn");

// current time rounded down to 
var now = moment().startOf("hour");

var timeBgTags = ["#nine-bg", "#ten-bg", "#eleven-bg", "#twelve-bg", "#one-bg", "#two-bg", "#three-bg", "#four-bg", "#five-bg"];
var timeArray = [hourNine, hourTen, hourEleven, hourTwelve, hourOne, hourTwo, hourThree, hourFour, hourFive];

var storedTasks = JSON.parse(localStorage.getItem('tasks')) || {}; 


//loop that populates the storageTaskTags array with ID tags
var storageTaskTags = [];
    for (let i = 0; i <= 8; i++) {
      let y = [9,10,11,12,1,2,3,4,5]
      storageTaskTags[i] = "#task-" + y[i];  
    }
    // Output of storageTaskTags: ['#task-9', '#task-10', '#task-11', '#task12', '#task1', '#task2', '#task3', '#task4', '#task5']

  //color coordinates the hour blocks depending on the current time, uses moment.js
var auditTime = function() {
  for (let i = 0; i < timeArray.length; i++) {
    if(now>timeArray[i].startOf("hour")) {
      // add past css style
      $(timeBgTags[i]).addClass("past");
    } else if(now<timeArray[i].startOf("hour")) {
     // add future css style
      $(timeBgTags[i]).addClass("future");
    } else if(now = (timeArray[i]).startOf("hour")) {
     // add present css style
      $(timeBgTags[i]).addClass("present");
    }
  }
};

auditTime();

// returns the task input ID tag
function getTaskInput(buttonHour) {

  return $('#task-' +  buttonHour).val();
}


saveButton.each(function () {
  var myButtonHour = $(this).data('hour');
  var taskInput = getTaskInput(myButtonHour);

  localStorage.getItem( 'tasks', JSON.stringify(taskInput));
})

// event listener that will save textarea values to local storage
saveButton.on("click", function() {
  console.log($(this).data('hour'));
  var buttonHour = $(this).data('hour');
  var taskInput = $("#task-" + buttonHour)
  var taskValue = taskInput.val();

  storedTasks[ 'task-' + buttonHour] = taskValue;

  localStorage.setItem( 'tasks', JSON.stringify(storedTasks));
});


// function that will populate the textarea values with their corresponding values stored in local storage
var populateInputs = function() {
  for (let i = 0; i < 9; i++) {
    let y = [9,10,11,12,1,2,3,4,5]
      var myTasks = JSON.parse(localStorage.getItem('tasks'));
      let output = $(storageTaskTags[i]);
      output.val(myTasks["task-" + y[i]]); 
}
};

getTaskInput();
populateInputs();