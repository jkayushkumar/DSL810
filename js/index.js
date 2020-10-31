function goToHome(){ 
    $('html, body').animate({ scrollTop: $("#background").offset().top }, 1000);
}
function goTo(id){
    $('html, body').animate({ scrollTop: $(id).offset().top }, 1000);
}