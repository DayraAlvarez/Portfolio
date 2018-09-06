//--Splash
$(document).ready(function () {
    setTimeout(function () {
        $('#splash').fadeOut(400);
    }, 2000);
});

//--Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    console.log(123);

}







var config = {
    apiKey: "AIzaSyAwTBAeP408SCZN6FD50NP6SkTW6Mu8BvY",
    authDomain: "dayrafolio.firebaseapp.com",
    databaseURL: "https://dayrafolio.firebaseio.com",
    projectId: "dayrafolio",
    storageBucket: "dayrafolio.appspot.com",
    messagingSenderId: "352703885079"
  };
  firebase.initializeApp(config);