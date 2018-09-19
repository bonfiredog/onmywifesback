$(document).ready(function(){
        $("#fadeinscreen").fadeOut(5000);
    

$('.book').hover(
    function () {
     $('#textbox').animate({
         opacity: '0'
     }, 500);
 },
    
 function () {
     $('#textbox').animate({
         opacity: '1'
     }, 500);
     });


$('.btn').click(
    function () {
        if($('#fadeoutscreen').css('opacity') < 1) {
            
        $("#fadeoutscreen").fadeIn(4000);
            
        } else {
            
        window.location.href = "http://stackoverflow.com";
            
        }
        });    

});

