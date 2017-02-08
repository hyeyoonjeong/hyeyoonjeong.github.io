$(document).ready(function () {
    $(".mobile-nav").hide();
    $(".mobile-link").click(function () {
       $(".mobile-nav").toggle();
    });
    $(".mobile-header").click(function () {
        $(".mobile-nav").hide();
    });

    var canvas = new Array(6);
    canvas[0] = document.getElementById("circle-java");
    canvas[1] = document.getElementById("circle-js");
    canvas[2] = document.getElementById("circle-html");
    canvas[3] = document.getElementById("circle-android");
    canvas[4] = document.getElementById("circle-sql");
    canvas[5] = document.getElementById("circle-c");
    var data = [80, 75, 80, 70, 68, 45];
    for(var i = 0; i < canvas.length; i++){
        var context = canvas[i].getContext("2d");
        drawCircle(canvas[i], context, data[i]);
    }

});
var currentIndex = 0;
var max = 3;
function showDetail(data) {
    $("#"+data).fadeIn();
}
function removeDetail(data) {
    $("#"+data).fadeOut();
}

function goToNext(data) {
    $(data+currentIndex).hide();
    if(currentIndex < max){
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    $(data+currentIndex).fadeIn();
}

function goToPrev(data) {
    $(data+currentIndex).hide();
    if(currentIndex > 0){
        currentIndex--;
    } else {
        currentIndex = max;
    }

    $(data+ currentIndex).fadeIn();
}
