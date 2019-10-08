//Splash
$(document).ready(function () {
    setTimeout(function () {
        $('#splash').fadeOut(600);
    }, 3500);
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("topnavDrop");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}