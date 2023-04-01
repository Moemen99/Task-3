
// let clock = document.getElementById("timer")


// function getTime(){
// let date = new Date()
// let hours = date.getHours();
// let mins = date.getMinutes();
// let secs = date.getSeconds();

// if(mins < 10){
//     mins = `0${mins}`
// }

// secs = secs < 10 ? secs = `0${secs}`: secs;
// clock.innerText =`${hours}:${mins}:${secs}`
// setTimeout(getTime,1000);
// }
// getTime();

// $("section").fadeIn(2000 ,function () {
//     $("section").animate({width: '100%' },2000 ,function () {
//         $("section").animate({height: '100vh'},2000 ,function () {
//             $("h2").fadeIn(1000, function () {
//                 $(".test1").slideDown(1500, function () {
//                     $(".test2").show(1500, function() {
//                         $(".test3").fadeIn(1500)
//                     })
//                 })
                
//             })
            
//         })
//     })


// })




// console.log(!(20 == 30) && !(20 == 30) && !(20 == 10) && !(20 == 10));
console.log((20 != 30));
// $(".section").show(1500)
            // $(".section").animate({top: '0',left:'0' },1000)

//===========P======R======E=======L======O======A======D========E========R=====//

$(document).ready(function(){
    $("#loader").fadeOut(2000,function(){
        $(".pre-loader").fadeOut(200,function(){
                $(".test").show(1300)
            })
        })
    }) 

$("#resource").click(function () { 
    $("#exercise-data").addClass("d-none");
    $("#resource-data").addClass("d-block");
    $(".disable").addClass("opacity");
    $(".replace").removeClass("back-ground-gradient");
    $(".replace").addClass("back-ground-gradient-disabled");
    $('.stop').attr('disabled', '')
    ChoiceToggle()

    list=["answer"]

});
$(".close1").click(function () { 
    $("#resource-data").removeClass("d-block");
    $("#exercise-data").removeClass("d-none");
    $(".disable").removeClass("opacity");
    $(".replace").addClass("back-ground-gradient");
    $(".replace").removeClass("back-ground-gradient-disabled");
    $('.stop').removeAttr('disabled');
});
$("#help").click(function () { 
    $("#exercise-data").addClass("d-none");
    $("#help-data").addClass("d-block");
    $(".disable").addClass("opacity");
    $(".replace").removeClass("back-ground-gradient");
    $(".replace").addClass("back-ground-gradient-disabled");
    $('.stop').attr('disabled', '')
    ChoiceToggle()

    list=["answer"]

});
$(".close2").click(function () { 
    $("#exercise-data").removeClass("d-none");
    $("#help-data").removeClass("d-block");
    $(".disable").removeClass("opacity");
    $(".replace").addClass("back-ground-gradient");
    $(".replace").removeClass("back-ground-gradient-disabled");
    $('.stop').removeAttr('disabled');
    


});

function replay() { 
    
    $(".answer3").html(`<span class="text-dark question1  fs-1  fw-bold me-5">3 m<span class="empty empty-3">__</span>p</span>
    `);
    $(".answer2").html(` <span class="text-dark question1 fs-1  fw-bold  me-5">2 <span class="empty empty-2">__</span>at</span>
    `);
    $(".answer1").html(`<span class="text-dark question1 fs-1  fw-bold  me-5">1 t<span class="empty empty-1">__</span>p</span>
    `);
    ChoiceToggle()

    list=["answer"]
    $(".empty-1").click( answerOne);
    $(".empty-2").click(answerTwo);
    $(".empty-3").click(answerThree);

}
$("#replay").click(replay);

$("#show").click(function () { 
    $(".answer3").html(`<div> 
    <span class="text-dark answer3 fs-1 fw-bold me-5">3 m<span>&nbsp;</span>a<span>&nbsp;</span>p</span>
    <div class="correct-mark mt-5">
        <img src="imgs/tikMark-small.png" class=" " alt="">
     </div>
    </div>
    
`);
    $(".answer2").html(` <span class="text-dark answer2 fs-1 fw-bold">2 p<span>&nbsp;</span>a<span>&nbsp;</span>t</span><div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="" alt="">
    </div>
    `);
    $(".answer1").html(`<span class="text-dark answer1 fs-1 fw-bold">1 t<span>&nbsp;</span>a<span>&nbsp;</span>p</span><div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="" alt="">
    </div>
    `);
    playCorrect()
    ChoiceToggle()
    list=["answer"]

});


let list=["answer"]
let correctAudio = document.getElementById("audioPlayer2")
let incorrectAudio = document.getElementById("audioPlayer1")
function playCorrect(){
    correctAudio.play()
}
function playinCorrect(){
    incorrectAudio.play()
}

function answerOne () { 
    if(list[0]=="a"){ $(".answer1").html(`<span class="text-dark answer1 fs-1 fw-bold">1 t<span>&nbsp;</span>${list[0]}<span>&nbsp;</span>p</span><div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="" alt="">
    </div>
    `);
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
     list=["answer"]
    playCorrect()}else if(list[0]=='p'){
        
        $(".answer1").html(`<span class="text-dark answer1 fs-1 fw-bold">1 t<span>&nbsp;</span>${list[0]}<span>&nbsp;</span>p</span>
    `);
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    $(".mark-toggle-1").fadeIn()
    $(".mark-toggle-1").fadeOut()
    setTimeout(replay,700)
    list=["answer"]
    playinCorrect()

    }
}

function answerTwo () { 
    if(list[0]=="p"){ $(".answer2").html(` <span class="text-dark answer2 fs-1 fw-bold">2 ${list[0]}<span>&nbsp;</span>a<span>&nbsp;</span>t</span><div class="correct-mark">
    <img src="imgs/tikMark-small.png" class="" alt="">
    </div>
    
    `);
    $(".letter-1").removeClass("letter-clicked")
        $(".letter-1").addClass("letter-unclicked")
        $(".letter-2").removeClass("letter-clicked")
        $(".letter-2").addClass("letter-unclicked")
        
        list=["answer"]
    playCorrect()
}
    else if(list[0]=='a'){
        $(".answer2").html(` <span class="text-dark answer2 fs-1 fw-bold">2 ${list[0]}<span>&nbsp;</span>a<span>&nbsp;</span>t</span>
    </div>
    `);
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    $(".mark-toggle-2").fadeIn()
$(".mark-toggle-2").fadeOut()

    setTimeout(replay,700)
    list=["answer"]

    playinCorrect()

    }
   
}

function answerThree () { 
    if(list[0]=="a"){$(".answer3").html(`<div> 
    <span class="text-dark answer3 fs-1 fw-bold me-5">3 m<span>&nbsp;</span>${list[0]}<span>&nbsp;</span>p</span>
    <div class="correct-mark mt-5">
        <img src="imgs/tikMark-small.png" class=" " alt="">
    </div>
    </div>
    <div>
    </div>`);
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    list=["answer"]

    playCorrect()}else  if(list[0]=='p'){
        $(".answer3").html(`
<span class="text-dark answer3 fs-1 fw-bold me-5">3 m<span>&nbsp;</span>${list[0]}<span>&nbsp;</span>p</span>
`);

$(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    $(".mark-toggle-3").fadeIn()
$(".mark-toggle-3").fadeOut()
    setTimeout(replay,700)
    list=["answer"]

playinCorrect()
    }
    

}


function ChoiceToggle () { 
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
 }
$(".letter-1").on("click", function () {
    
    list[0]=$(".letter-1").attr("title")

    $(".letter-1").addClass("letter-clicked")
    $(".letter-1").removeClass("letter-unclicked")
    $(".letter-2").removeClass("letter-clicked")
    $(".letter-2").addClass("letter-unclicked")
    console.log(list);
    
    });

    
   

$(".letter-2").on("click", function () {
    list[0]=$(".letter-2").attr("title")
    $(".letter-2").addClass("letter-clicked")
    $(".letter-2").removeClass("letter-unclicked")
    $(".letter-1").removeClass("letter-clicked")
    $(".letter-1").addClass("letter-unclicked")
    console.log(list);
    localStorage.setItem("answer",JSON.stringify(list[0]) )



});


$(".empty-1").click( answerOne);
$(".empty-2").click(answerTwo);
$(".empty-3").click(answerThree);






