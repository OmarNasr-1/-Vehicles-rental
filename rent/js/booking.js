carID = document.getElementById("Car_id")
// carName = document.getElementById("Car_name")
Car_photo=document.getElementById("Car_photo")
recipesDetals = JSON.parse(localStorage.recipesDetals);

carID.value = recipesDetals.data._id;
// carName.value = recipesDetals.data.brand;
Car_photo.src=recipesDetals.data.imageURL[0];

// /////////////////////////////////////////////////////////////////////

window.addEventListener("load", () => {
    picker.attach({ target: "input-pop" });
  });
  window.addEventListener("load", () => {
    picker.attach({ target: "input-poop" });
  });

// /////////////////////////////////////////////////////////////////////////////

  jQuery( document ).ready(function( $ ) {

    "use strict";
          // Page loading animation
  
          $("#preloader").animate({
              'opacity': '0'
          }, 600, function(){
              setTimeout(function(){
                  $("#preloader").css("visibility", "hidden").fadeOut();
              }, 300);
          });
  
          $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var box = $('.header-text').height();
            var header = $('header').height();
  
            if (scroll >= box - header) {
              $("header").addClass("background-header");
            } else {
              $("header").removeClass("background-header");
            }
          });
   
  });
  
  $(document).ready(function(){
  
    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
  
        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1500);
            return false;
        });
    });
  
  });
 
/////////////////////////profile name in navbar////////////////////////////////////////////////////
try{
    profile = JSON.parse(localStorage.data);
  let col='';
  col +=
  `
  <li  class="nav-item">
  ${profile.firstName}
  ${profile.lastName}
  </li>
  `
  document.getElementById("userName").innerHTML=col;
}catch(profile){}

//////////////////logout////////////////////////////////////////////

function logout(){
  setTimeout(myfunction,1000)
}
function myfunction(){
  localStorage.removeItem("data")
  localStorage.removeItem("token")
  location.href="login.html"
}

///////////////////////////////userToken in rent form///////////////////////////////////////////
UserToken=document.getElementById("UserToken");
UserToken.value = localStorage.token;

