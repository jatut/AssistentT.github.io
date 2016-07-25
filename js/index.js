// var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");
//
/*** function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
//*** vid.pause();
// to capture IE10
// *** vidFade();
});

pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})
***/

/************************************ footer ************************************************/

$(window).scroll(function(){
 var navTop =  $(window).scrollTop();
 $('.model-0').css("top", navTop + 50);
});


var text_slide_cur=0;
function showtext_slide(){
    $('#text_slide'+(text_slide_cur+1)).css({opacity: 0}).animate({opacity: 1.0,left: "50px"}, 1000);
    setTimeout(hidetext_slide, 3000);
};

function hidetext_slide(){
    $('#text_slide'+(text_slide_cur+1)).css({opacity: 1}).animate({opacity: 0,left: "-50px"}, 1000,function(){showtext_slide();});
    text_slide_cur=(text_slide_cur+1)%5;
}
$(document).ready(function() {
    showtext_slide();
})
