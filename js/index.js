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

var slideIndex = 1;

function nextAssign(n) {
    showAssign(slideIndex += n);
}

function currentAssign(n) {
    showAssign(slideIndex = n);
}

function showAssign(n) {
  var i;
  var slides = document.getElementsByClassName("innerAssnHolder");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("noDisplay");
  }
  slides[slideIndex - 1].classList.remove("noDisplay");
}