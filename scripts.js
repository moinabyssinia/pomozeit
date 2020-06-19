//event listner has issues - take a break doesnt work
//save the number of poms the user has done 

var isFirst = true;
var isBreak = false;
var min = Number(document.getElementById("min").textContent);
var sec = Number(document.getElementById("sec").textContent);
var buttons = document.querySelectorAll(".btn");


init();

function init(){
    //disable buttons at first
    for (var i = 0; i < buttons.length; i++){
        buttons[i].style.display = "none";
    }

    //remove extra zero from sec
    removeExtraZero(document.getElementsByClassName("extra-zero")[1]);
    
    letItCount();
}

function letItCount(){
    pomoCountDown = setInterval(function(){
        //remove extra zeros
        if(sec >= 10){
            removeExtraZero(document.getElementsByClassName("extra-zero")[1]);
        }
        if(min >= 10){
            removeExtraZero(document.getElementsByClassName("extra-zero")[0]);
        }
        
        if (isFirst){
            if (min > 0){
                min-=1;
            }
            if (isBreak === true){
                sec = 5;
            }
            changeMin(min);
            isFirst = false;
        }
        
        sec-=1;
        changeSec(sec);

        //add extra zero when min/sec is less than 10
        if (min < 10){
            addExtraZero(document.getElementsByClassName("extra-zero")[0]);
        }
        if (sec < 10){
            addExtraZero(document.getElementsByClassName("extra-zero")[1]);
        }
    
        
        if(min === 0 && sec === 0){
            stopIt();
            for (var i = 0; i < buttons.length; i++){
                buttons[i].style.display = "initial";
            }
        } else if(sec === 0){
            sec = 10;
            changeSec(sec);
            document.getElementsByClassName("extra-zero")[1].style.display = "none";
            min -=1;
            changeMin(min);
        }
    }, 1000)
}

//display the updated number
function changeSec(sec){
    document.getElementById("sec").textContent = sec;

}
function changeMin(min){
    document.getElementById("min").textContent = min;
}
//add extra zero
function addExtraZero(element){
    element.style.display = "initial";
}
//remove extra zero
function removeExtraZero(element){
    element.style.display = "none";
}

//stopping the countdown
function stopIt(){
    clearInterval(pomoCountDown);
    document.querySelectorAll(".message")[0].textContent = "Time is Up!"
}


//add event listeners
//continue working
buttons[1].addEventListener("click", function(){
    isFirst = true;
    isBreak = false;
    min = 1;
    sec = 10;
    letItCount();
    this.style.display = "none";
    buttons[0].style.display = "none";
    document.querySelectorAll(".message")[0].textContent = "";
})

//take a break 
buttons[0].addEventListener("click", function(){
    isFirst = true;
    isBreak = true;
    min = 0;
    letItCount();
    this.style.display = "none";
    buttons[1].style.display = "none";
    document.querySelectorAll(".message")[0].textContent = "";
})