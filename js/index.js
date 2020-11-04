function goToHome() {
    $('html, body').animate({ scrollTop: $("#background").offset().top }, 1000);
}
function goTo(id) {
    $('html, body').animate({ scrollTop: $(id).offset().top }, 1000);
}
function showContactModal() {
    document.getElementById("contactModal").style.display = "grid";
}

window.onclick = function (event) {
    if (event.target == document.getElementById("contactModal")) {
        document.getElementById("contactModal").style.display = "none";        
    }
}