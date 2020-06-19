//event listner has issues
//save the number of poms the user has done 

var isFirst = true;
var min = Number(document.getElementById("min").textContent);
var sec = Number(document.getElementById("sec").textContent);
var buttons = document.querySelectorAll(".btn");


init();

function init(){
    //disable buttons at first
    for (var i = 0; i < buttons.length; i++){
        buttons[i].style.display = "none";
    }

    letItCount();
}

function letItCount(){
    pomoCountDown = setInterval(function(){
        if (isFirst){
            min-=1;
            sec = 5;
            changeMin(min);
            isFirst = false;
        }
        
        sec-=1;
        changeSec(sec);
        
        console.log("sec = ",sec);
        console.log("min = ", min);
    
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
            sec = 5;
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

function addExtraZero(element){
    element.textContent = 0;
}

//stopping the countdown
function stopIt(){
    clearInterval(pomoCountDown);
    document.querySelectorAll(".message")[0].textContent = "Time is Up!"
}


//add event listners
buttons[1].addEventListener("click", function(){
    min = 1;
    sec = 5;
    letItCount();
})