//minute is still showing negative numbers
//seconds show 0 before changing to a different minute
//when it's only single digit, use 09, 08 etc


var timeSec = 60;
var timeMin = 2;
var isFirst = true;

pomoCountDown = setInterval(function(){
    if (isFirst){
        timeMin-=1;
        changeMin(timeMin);
        isFirst = false;
    }
    
    timeSec-=1;
    changeSec(timeSec);
    
    console.log("sec = ",timeSec);
    console.log("min = ", timeMin);
    
    if(timeMin < 0){
        stopIt();
    } else if(timeSec < 0){
        timeSec = 60;
        timeMin -=1;
        changeMin(timeMin);
    }
}, 1000)


//display the updated number
function changeSec(timeSec){
    document.getElementsByClassName("sec")[0].textContent = timeSec;

}
function changeMin(timeMin){
    document.getElementsByClassName("min")[0].textContent = timeMin;

}

//stopping the countdown
function stopIt(){
    clearInterval(pomoCountDown);
    document.querySelectorAll(".message")[0].textContent = "Time is Up!"
}


