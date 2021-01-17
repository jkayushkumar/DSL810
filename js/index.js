function goToHome() {
    $('html, body').animate({ scrollTop: $("#background").offset().top }, 1000);
}
function goTo(id) {
    $('html, body').animate({ scrollTop: $(id).offset().top }, 1000);
}
function showContactModal() {
    document.getElementById("contactModal").style.display = "grid";
}
function showDetailsModal(modalNo) {
    switch (modalNo) {
        case 1:
            document.getElementById("assgn1Modal").style.display = "grid";
            break;
        case 2:
            document.getElementById("assgn2Modal").style.display = "grid";
            break;
        case 3:
            document.getElementById("assgn3Modal").style.display = "grid";
            break;
        case 4:
            document.getElementById("assgn4Modal").style.display = "grid";
            break;
        case 5:
            document.getElementById("assgn5Modal").style.display = "grid";
            break;
        case 6:
            document.getElementById("assgn6Modal").style.display = "grid";
            break;
        case 7:
            document.getElementById("assgn7Modal").style.display = "grid";
            break;
    }
}

window.onclick = function (event) {
    if (event.target == document.getElementById("contactModal")) {
        document.getElementById("contactModal").style.display = "none";
    }
    if (event.target == document.getElementById("assgn1Modal")) {
        document.getElementById("assgn1Modal").style.display = "none";
    }
    if (event.target == document.getElementById("assgn2Modal")) {
        document.getElementById("assgn2Modal").style.display = "none";
    }
    if (event.target == document.getElementById("assgn3Modal")) {
        document.getElementById("assgn3Modal").style.display = "none";
    }
    if (event.target == document.getElementById("assgn4Modal")) {
        document.getElementById("assgn4Modal").style.display = "none";
    }
    if (event.target == document.getElementById("assgn5Modal")) {
        document.getElementById("assgn5Modal").style.display = "none";
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
function toggleProject() {
    document.getElementById("project2").classList.toggle("noDisplay");
    document.getElementById("project1").classList.toggle("noDisplay");
}