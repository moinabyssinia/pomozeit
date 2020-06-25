//fix the audio plug
//save the number of poms the user has done 

var isFirst = true;
var isBreak = false;
var min = Number(document.getElementById("min").textContent);
var sec = Number(document.getElementById("sec").textContent);
var buttons = document.querySelectorAll(".btn");

//define quotes
var dict = [
    {'a': ['Henry Ford',"Thinking is the hardest work there is, which is probably the reason so few engage in it."]},
    {'b': ['Colin Powell', "A dream does not become reality through magic; it takes sweat, determination, and hard work."]},
    {'c': ['Oprah Winfrey', "Doing the best at this moment puts you in the best place for the next moment."]},

]

// init();

// function init(){
//     //disable buttons at first
//     // for (var i = 0; i < buttons.length; i++){
//     //     buttons[i].style.display = "none";
//     // }

//     // //remove extra zero from sec
//     // removeExtraZero(document.getElementsByClassName("extra-zero")[1]);
    
//     letItCount();
// }

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

            sec = 10;
            changeMin(min);
            isFirst = false;
        }
        
        sec-=1;
        //remove extra zeros
        if(sec >= 10){
            removeExtraZero(document.getElementsByClassName("extra-zero")[1]);
        }
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

            if (isBreak){
                goWork();
            } else{
                takeBreak();
            }
            for (var i = 0; i < buttons.length; i++){
                buttons[i].style.display = "initial";
            }
        } else if(sec === 0){
            sec = 9;
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
    // document.querySelectorAll(".message")[0].textContent = "Time is Up!"

    //create display message
    $("div.message-container").append("<h2 class = 'message'>Time is Up!</h2>")

    //display quotes
    $("div.quotes").append("<h2 class = 'quote'>"+dict[0]['a'][1]+"</h2>")

    //display author
    $("div.quotes").append("<p id = 'author'>--"+dict[0]['a'][0]+"</p>")

}


//add event listeners
//continue working
buttons[1].addEventListener("click", function(){
    isFirst = true;
    //assign working time
    min = 0;
    sec = 10;
    letItCount();
    this.style.display = "none";
    buttons[0].style.display = "none";
    //document.querySelectorAll(".message")[0].textContent = "";
    
    //remove appended messages
    $("div h2").remove()
    $("div.quotes p").remove()
})

//take a break 
buttons[0].addEventListener("click", function(){
    isFirst = true;
    isBreak = true;
    min = 0;
    letItCount();
    this.style.display = "none";
    buttons[1].style.display = "none";
    //document.querySelectorAll(".message")[0].textContent = "";
    
    //remove appended messages
    $("div h2").remove()
    $("div.quotes p").remove()

})

//take-a-break sound effect
function takeBreak(){
    isBreak = true;
    var audio = new Audio("./sounds/bell_small_ring_001.mp3");
    audio.play();
}
//back-to-work sound effect
function goWork(){
    var audio = new Audio("./sounds/zapsplat_bell_service_desk_press_x3_18039.mp3");
    audio.play();
    isBreak = false;
}