//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
//lugar
function displayPlace(){
  $.get("http://worldtimeapi.org/api/timezone/Europe/Madrid", (data, status) => {
    //alert("Data: " + data.utc_datetime + "\nStatus: " + status);
    document.getElementById("Lugar").innerHTML=""+data.timezone;
  });
}
function getHora(){
  $.get("http://worldtimeapi.org/api/timezone/Europe/Madrid", (data, status) => {
    //alert("Data: " + data.utc_datetime + "\nStatus: " + status);
    document.getElementById("Hora").innerHTML=""+data.datetime;
  });
}
function getDiaSemana(){
  $.get("http://worldtimeapi.org/api/timezone/Europe/Madrid", (data, status) => {
    //alert("Data: " + data.utc_datetime + "\nStatus: " + status);s
      var dia;
      switch(data.day_of_week){
        case 1: dia="Lunes";break;
        case 2: dia="Martes";break;
        case 3: dia="Miercoles";break;
        case 4: dia="Jueves";break;
        case 5: dia="Viernes";break;
        case 6: dia="Sabado";break;
        case 7: dia="Domingo";break;
        default: dia="un gran dia";
      }
    document.getElementById("DiaS").innerHTML="Hoy es "+dia;
  });
}
function getDiaAño(){
  $.get("http://worldtimeapi.org/api/timezone/Europe/Madrid", (data, status) => {
    //alert("Data: " + data.utc_datetime + "\nStatus: " + status);
    document.getElementById("DiaA").innerHTML=""+data.day_of_year;
  });
}
function getSemana(){
  $.get("http://worldtimeapi.org/api/timezone/Europe/Madrid", (data, status) => {
    //alert("Data: " + data.utc_datetime + "\nStatus: " + status);
    document.getElementById("Semana").innerHTML=""+data.week_number;
  });
}