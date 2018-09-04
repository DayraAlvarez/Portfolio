//--Splash
$(document).ready(function () {
    setTimeout(function () {
        $('#splash').fadeOut(400);
    }, 2000);
});

//--Dropdown navbar menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
