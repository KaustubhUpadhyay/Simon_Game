var pressed = 0;
var level = 1;
var ind = 0;

var press = [];
var btnarr = [];

var btnpress = 0;


$(".btn").click(function(){
    sid = $(this).attr('id');
    
    animate(sid);

    btnpress++;
    btnarr.push(sid);

    var audio = new Audio("sounds/"+sid+".mp3");
    audio.play();
    
    if(btnpress == level){
        check();
        btnpress = 0;
    }
});


$(document).keypress(function(){

    pressed++;
    if(pressed == 1){
        start();
    }
});


function start(){

    $("#level-title").text("Level "+level);
    
    myLoop();
    ind = 0;
}

function myLoop() {                                             
    setTimeout(function() {                                                 
        var ran = Math.floor(Math.random() * 4) + 1;
        press.push(ran);

        var audio = new Audio("sounds/"+ran+".mp3");
        audio.play();
        animate(ran);
                                                    
      ind++;                                                          
      if (ind < level) {           
        myLoop();             
      }                       
    }, 500)
}

function check(){
    var flag = true;
    
    for(var i = 0;i<level;i++){
        if(press[i] != btnarr[i]){
            flag = false;
        }
        //alert(press[i]+" "+btnarr[i]);
    }

    level++;
    press = [];
    btnarr = [];
    btnpress = 0;

    if(flag){
        start();
    }
    else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("#level-title").text("Game Over");
    }
}

function animate(ran){

    $("#"+ran).addClass("pressed");
    setTimeout(function(){
        $("#"+ran).removeClass("pressed");
    },100);
}   