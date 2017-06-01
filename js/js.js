$(document).scroll(function(){
    
    
    var y = $(this).scrollTop();
    
    if (y > 180){
        $("#img1").css( "transform", "translateX(0)");
        $("#text1").css( "transform", "translateX(0)");
        $("#overlay1").css( "background-color", "rgba(255,255,255,0)");
    }
    if (y > 450){
        $("#img2").css( "transform", "translateX(0)");
        $("#text2").css( "transform", "translateX(0)");
        $("#overlay2").css( "background-color", "rgba(255,255,255,0)");
    }
    if (y > 800){
        $("#img3").css( "transform", "translateX(0)");
        $("#text3").css( "transform", "translateX(0)");
        $("#overlay3").css( "background-color", "rgba(255,255,255,0)");
    }
    if (y > 1100){
        $("#img4").css( "transform", "translateX(0)");
        $("#text4").css( "transform", "translateX(0)");
        $("#overlay4").css( "background-color", "rgba(255,255,255,0)");
    }
    if (y > 1470){
        $("#img5").css( "transform", "translateX(0)");
        $("#text5").css( "transform", "translateX(0)");
        $("#overlay5").css( "background-color", "rgba(0,255,255,0)");
    }
    
    
});