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

// var eventNine = document.querySelector("#event-9am");
// var eventTen = document.querySelector("#event-10am");
// var eventEleven = document.querySelector("#event-11am");
// var eventTwelve = document.querySelector("#event-12pm");
// var eventOne = document.querySelector("#event-1pm");
// var eventTwo = document.querySelector("#event-2pm");
// var eventThree = document.querySelector("#event-3pm");
// var eventFour = document.querySelector("#event-4pm");
// var eventFive = document.querySelector("#event-5pm");

var events = {
  eventNine: document.querySelector("#event-9am").value,
  eventTen: document.querySelector("#event-10am").value,
  eventEleven: document.querySelector("#event-11am").value,
  eventTwelve: document.querySelector("#event-12pm").value,
  eventOne: document.querySelector("#event-1pm").value,
  eventTwo: document.querySelector("#event-2pm").value,
  eventThree: document.querySelector("#event-3pm").value,
  eventFour: document.querySelector("#event-4pm").value,
  eventFive: document.querySelector("#event-5pm").value
}

var timeInputTags = [];
    for (let i = 0; i <= 8; i++) {
      let y = [9,10,11,12,1,2,3,4,5]
      let x = "pm"
      var amChecker = function() {
        if (i<3) {
          x= "am";
          
          return x;
        }
      };
      amChecker();
      timeInputTags[i] = "#event-" + y[i] + x;  
      y++
    }



// var timeInputTags = ["#event-9am", "#event-10am", "#event-11am", "#event-12pm", "#event-1pm", "#event-2pm", "#event-3pm", "#event-4pm", "#event-5pm"];
var timeBgTags = ["#nine-bg", "#ten-bg", "#eleven-bg", "#twelve-bg", "#one-bg", "#two-bg", "#three-bg", "#four-bg", "#five-bg"];
var timeArray = [hourNine, hourTen, hourEleven, hourTwelve, hourOne, hourTwo, hourThree, hourFour, hourFive];
var populateDescriptions = function() {
  for (let i = 0; i <= 8; i++) {
   oldData = [
    {
      id: timeInputTags[i],
      text: localStorage.getItem()
    }
  ]
  }
};


var auditTime = function() {

  for (let i = 0; i < timeArray.length; i++) {
    let now = moment().startOf("hour");
    if(now>timeArray[i]) {
      // add past css style
      $(timeBgTags[i]).addClass("past");
    } 

     if(now<timeArray[i]) {
     // add future css style
      $(timeBgTags[i]).addClass("future");
    }
    if(now === (timeArray[i]).startOf("hour")) {
     // add present css style
      $(timeBgTags[i]).addClass("present");
    }
  }
};

auditTime();

var populateDescriptions = function() {
  for (let i = 0; i <= 8; i++) {
    if(localStorage.getItem(timeInputTags[i], inputText.value) == null) {

      var inputText = document.getElementById(timeInputTags[i]);

    }
    localStorage.getItem(timeInputTags[i], inputText.value);
    console.log(inputText.value);
  }
};


// populateDescriptions();
var saveButton = document.querySelectorAll(".save-item");
var saveData = function () {
  for (let i = 0; i <= 8; i++) {
  var newData = document.getElementById(timeInputTags[i]).value;

  if(localStorage.getItem("events") == null) {
    localStorage.setItem("events", []);
  }

  var oldData = JSON.parse(localStorage.getItem("events"));
  oldData.push(newData);
  localStorage.setItem("events", JSON.stringify(oldData));

  }
};
// //  save to local storage
// saveButton.addEventListener("click", function(event){ 
//   event.preventDefault();
//     saveData();
// });


