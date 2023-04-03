

//===========P======R======E=======L======O======A======D========E========R=====//

$(document).ready(function(){
    $("#loader").fadeOut(2000,function(){
        $(".pre-loader").fadeOut(200,function(){
                $(".test").show(1300,function(){
                    $(".test").animate({top:-5},1000,function(){
                        $(".section").removeClass("test");
                    })
                   
                })
            })
        })
    }) 

$("#resource").click(getResource);
function getResource() { 
    $("#exercise-data").addClass("d-none");
    // $("#resource-data").addClass("d-block");
    $(".resource-1").addClass("d-block");

    $(".disable").addClass("opacity");
    $(".replace").removeClass("back-ground-gradient");
    $(".replace").addClass("back-ground-gradient-disabled");
    $('.stop').attr('disabled', '')
    ChoiceToggle()
    $("img.stop").addClass("opacity")
    $("img.stop").off("click")
    $(".img.stop").off("click")

    list=["answer"]

}
$(".close-resource").click(function () { 
    // $("#resource-data").removeClass("d-block");
 $(".resource-1").removeClass("d-block");

    $("#exercise-data").removeClass("d-none");
    $(".disable").removeClass("opacity");
    $(".replace").addClass("back-ground-gradient");
    $(".replace").removeClass("back-ground-gradient-disabled");
    
    $("img.stop").removeClass("opacity")
    $("img.stop.get-help").click(help)
    $("img.get-answer").click(show)
    $("img.get-resources").click(getResource)
    $("img.get-replay").click(replay)
});
$("#help").click(help);


$(".close2").click(function () { 
    $("#exercise-data").removeClass("d-none");
    $("#help-data").removeClass("d-block");
    $(".disable").removeClass("opacity");
    $(".replace").addClass("back-ground-gradient");
    $(".replace").removeClass("back-ground-gradient-disabled");
    
    $("img.stop").removeClass("opacity")
    $("img.stop.get-help").click(help)
    $("img.get-answer").click(show)
    $("img.get-resources").click(getResource)
    $("img.get-replay").click(replay)
    


});

function help() { 
    $("#exercise-data").addClass("d-none");
    $("#help-data").addClass("d-block");
    $(".disable").addClass("opacity");
    $(".replace").removeClass("back-ground-gradient");
    $(".replace").addClass("back-ground-gradient-disabled");
    $('.stop').attr('disabled', '')
    $("img.stop").addClass("opacity")
    $("img.stop").off("click")
    $(".img.stop").off("click")
    ChoiceToggle()

    list=["answer"]

}
function replay() { 
    
    $(".answer2").html(`<div class="correct-mark">
    <img src="imgs/tikMark-small.png" class=" invisible" alt="">
    </div>
    <span class="text-dark question1 fs-1 fw-bold me-5">2 <span class="empty empty-2">__</span>at</span>`);
    $(".answer3").html(` <div class="correct-mark mt-5">
                                                                
    <img src="imgs/tikMark-small.png" class=" invisible " alt="">
 </div>
<img src="imgs/tikMark-small.png" class="mark-true invisible" alt="">
<span class="text-dark question1 fs-1  fw-bold me-5">3 m<span class="empty empty-3">__</span>p</span>`);
    $(".answer1").html(`<div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="ms-5 invisible" alt="">
    </div>
<span class="text-dark question1 fs-1 fw-bold me-5">1 t<span class="empty empty-1">__</span>p</span>`);
    ChoiceToggle()

    list=["answer"]
    $(".empty-1").click( answerOne);
    $(".empty-2").click(answerTwo);
    $(".empty-3").click(answerThree);
    $("span.done").removeClass("opacity")
    $(".letter-1").click(chooseLetterOne)
    $(".letter-2").click(chooseLetterTwo)
    $("img.get-answer").removeClass("opacity")
    $("img.get-answer").click(show)

}




$("#replay").click(replay);

$("#show").click(show);
function show() { 
    $(".answer3").html(`
    <div> 
    <div class="correct-mark mt-5">
        <img src="imgs/tikMark-small.png" class=" ms-5 ps-5 " alt="">
    </div>
    <span class="text-dark answer3 fs-1 fw-bold me-5">3 m<span>&nbsp;</span>a<span>&nbsp;</span>p</span>
    
    </div>
    <div>
    </div>
`);
    $(".answer2").html(`
    
    <div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="ms-3 ps-4" alt="">
    </div>
    <span class="text-dark answer2 fs-1 fw-bold">2 p<span>&nbsp;</span>a<span>&nbsp;</span>t</span>
    
    
    `);
    $(".answer1").html(`
    <div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="ms-5 ps-5" alt="">
    </div>
    <span class="text-dark answer1 fs-1 fw-bold">1 t<span>&nbsp;</span>a<span>&nbsp;</span>p</span>
    `);
    playCorrect()
    ChoiceToggle()
    $("span.done").addClass("opacity")
    $("img.get-answer").addClass("opacity")
    $("img.get-answer").off("click")
    $(".letter-1").off("click")
    $(".letter-2").off("click")
    list=["answer"]
    counter=0


}


let list=["answer"]
let counter =0;
let correctAudio = document.getElementById("audioPlayer2")
let incorrectAudio = document.getElementById("audioPlayer1")

function playCorrect(){
    correctAudio.play()
}
function playinCorrect(){
    incorrectAudio.play()
}


function replayOne(){
    $(".answer1").html(`<div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="ms-5 invisible" alt="">
    </div>
<span class="text-dark question1 fs-1 fw-bold me-5">1 t<span class="empty empty-1">__</span>p</span>`);
    ChoiceToggle()

    list=["answer"]
    $(".empty-1").click( answerOne);
    $(".empty-2").click(answerTwo);
    $(".empty-3").click(answerThree);
    
}
function answerOne () { 
    if(list[0]=="a"){ $(".answer1").html(`<div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="ms-5 ps-5" alt="">
    </div>
    <span class="text-dark answer1 fs-1 fw-bold">1 t<span>&nbsp;</span>${list[0]}<span>&nbsp;</span>p</span>    `);
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
     list=["answer"]
    playCorrect()
    counter++
    console.log(counter);

    if(counter == 3){
        $("span.done").addClass("opacity")
        $(".letter-1").off("click")
        $(".letter-2").off("click")
        $("img.get-answer").addClass("opacity")
    $("img.get-answer").off("click")
        counter =0

    }
    
    }else if(list[0]=='p'){
        
        $(".answer1").html(`
        <div class="correct-mark">
        <img src="imgs/crossMark-small.png" class="mark-false mark-toggle-1 ms-5 ps-5" alt="">
    
    </div>
    <span class="text-dark answer1 fs-1 fw-bold">1 t<span>&nbsp;</span>${list[0]}<span>&nbsp;</span>p</span>
    
    `);
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    $(".mark-toggle-1").fadeIn()
    $(".mark-toggle-1").fadeOut()
    $(".mark-toggle-1").fadeIn()
    $(".mark-toggle-1").fadeOut()
    setTimeout(replayOne,700)
    list=["answer"]
    playinCorrect()

    }
}

function answerTwo () { 
    if(list[0]=="p"){ $(".answer2").html(` <div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="ms-5" alt="">
    </div>
    <span class="text-dark answer2 fs-1 fw-bold">2 ${list[0]}<span>&nbsp;</span>a<span>&nbsp;</span>t</span>
    `);
    $(".letter-1").removeClass("letter-clicked")
        $(".letter-1").addClass("letter-unclicked")
        $(".letter-2").removeClass("letter-clicked")
        $(".letter-2").addClass("letter-unclicked")
        
        list=["answer"]
    playCorrect()
    counter++
    console.log(counter);

    if(counter == 3){
        $("span.done").addClass("opacity")
        $(".letter-1").off("click")
        $(".letter-2").off("click")
        $("img.get-answer").addClass("opacity")
    $("img.get-answer").off("click")
        counter =0
    }


    }
    else if(list[0]=='a'){
        $(".answer2").html(`<div class="correct-mark">
        <img src="imgs/crossMark-small.png" class="mark-false mark-toggle-2 ms-3" alt="">
        </div>
        <span class="text-dark answer2 fs-1 fw-bold">2 ${list[0]}<span>&nbsp;</span>a<span>&nbsp;</span>t</span>
    `);
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    
    $(".mark-toggle-2").fadeIn()
    $(".mark-toggle-2").fadeOut()
    $(".mark-toggle-2").fadeIn()
    $(".mark-toggle-2").fadeOut()
    setTimeout(replayTwo,700)
    list=["answer"]

    playinCorrect()

    }
   
}

function replayTwo(){
    $(".answer2").html(` <div class="correct-mark">
    <img src="imgs/tikMark-small.png" class=" invisible" alt="">
    </div>
    <span class="text-dark question1 fs-1 fw-bold me-5">2 <span class="empty empty-2">__</span>at</span>`);
    
    ChoiceToggle()

    list=["answer"]
    $(".empty-1").click( answerOne);
    $(".empty-2").click(answerTwo);
    $(".empty-3").click(answerThree);
}

function answerThree () { 
    if(list[0]=="a"){$(".answer3").html(`<div> 
    <div class="correct-mark mt-5">
        <img src="imgs/tikMark-small.png" class="ms-5 ps-5 " alt="">
    </div>
    <span class="text-dark answer3 fs-1 fw-bold me-5">3 m<span>&nbsp;</span>${list[0]}<span>&nbsp;</span>p</span>
    
    </div>
    <div>
    </div>`);
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    list=["answer"]
    counter++
    console.log(counter);

    if(counter == 3){
        $("span.done").addClass("opacity")
        $(".letter-1").off("click")
        $(".letter-2").off("click")
        $("img.get-answer").addClass("opacity")
    $("img.get-answer").off("click")
        counter =0


    }
  
    playCorrect()
    }else  if(list[0]=='p'){
            $(".answer3").html(`
            <div> 
        <div class="correct-mark mt-5">
    <img src="imgs/crossMark-small.png" class="mark-false mark-toggle-3 ms-5" alt="">
    </div>
    <span class="text-dark answer3 fs-1 fw-bold me-5">3 m<span>&nbsp;</span>${list[0]}<span>&nbsp;</span>p</span>
    
    </div>
    <div>
    </div>
    `);

$(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    $(".mark-toggle-3").fadeIn().fadeOut()
    list=["answer"]

playinCorrect()
setTimeout(replayThree,700)
    }
    

}


function replayThree(){
    $(".answer3").html(` 
    <div class="correct-mark mt-5">
                                                                
    <img src="imgs/tikMark-small.png" class=" invisible " alt="">
 </div>
<img src="imgs/tikMark-small.png" class="mark-true invisible" alt="">
<span class="text-dark question1 fs-1  fw-bold me-5">3 m<span class="empty empty-3">__</span>p</span>
    `);
   
    ChoiceToggle()

    list=["answer"]
    $(".empty-1").click( answerOne);
    $(".empty-2").click(answerTwo);
    $(".empty-3").click(answerThree);
}

function ChoiceToggle () { 
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
}

function chooseLetterTwo(){
        list[0]=$(".letter-2").attr("title")
        $(".letter-2").addClass("letter-clicked")
        $(".letter-2").removeClass("letter-unclicked")
        $(".letter-1").removeClass("letter-clicked")
        $(".letter-1").addClass("letter-unclicked")
        console.log(list);
        localStorage.setItem("answer",JSON.stringify(list[0]) )
}
function chooseLetterOne(){
    list[0]=$(".letter-1").attr("title")
    $(".letter-1").addClass("letter-clicked")
    $(".letter-1").removeClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    console.log(list);
}


$(".letter-1").click(chooseLetterOne );
$(".letter-2").click(chooseLetterTwo  );


$(".empty-1").click( answerOne);
$(".empty-2").click(answerTwo);
$(".empty-3").click(answerThree);


console.log(counter);



