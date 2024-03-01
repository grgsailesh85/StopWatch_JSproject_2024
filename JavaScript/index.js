const timer = document.getElementById("stopwatch");

//'hr' , 'min' and 'sec' variables store the hours, minutes and seconds of the stopwatch
var hr = 0;
var min = 0;
var sec = 0;
//this 'stoptime' boolean variable indicates whether the stop watch is paused ('true') or running ('false').
var stoptime = true;

//this function starts timer, sets stop watch to false and calls timerCycle() to begin the timer cycle.
function startTimer() {
  if (stoptime == true) {
    stoptime = false;
    timerCycle();
  }
}

//this functions stops timer,sets stoptime to true pausing the timer cycle
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

// this function is called repeatedly when the timer is running , it increments the seconds, minutes and hours, updates the display and schedules itself to run again after 1 second using setTimeout()
function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    
    //ensures that the time displayed in the format 'hh:mm:ss' always maintains a consistent two-digit format for each component, for eg:- instead of "9:5:3",it would display "09:05:03".
    if (sec < 10 ) {
      sec = "0" + sec;
    }
    if (min < 10 ) {
      min = "0" + min;
    }
    if (hr < 10 ) {
      hr = "0" + hr;
    }

    timer.innerHTML = hr + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }
}

//this functions resets the timer to "00:00:00" , sets 'stoptime' to 'true' to stop the timer, resets the variables to zero and updates the display accordingly.
function resetTimer() {
  timer.innerHTML = "00:00:00";
  stoptime = true;
  hr = 0;
  sec = 0;
  min = 0;
}