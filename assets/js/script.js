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

var timeIdTags = ["#nine", "#ten", "#eleven", "#twelve", "#one", "#two", "#three", "#four", "#five"];
var timeBgTags = ["#nine-bg", "#ten-bg", "#eleven-bg", "#twelve-bg", "#one-bg", "#two-bg", "#three-bg", "#four-bg", "#five-bg"];
var timeArray = [hourNine, hourTen, hourEleven, hourTwelve, hourOne, hourTwo, hourThree, hourFour, hourFive];

var events = [
  {

  }
]

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

$("#save-item").click(function () {
    events.push({
      text: $("#event").text
    })
    localStorage.setItem("events", JSON.stringify(events))
})