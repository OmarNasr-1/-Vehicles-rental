try{
  profile = JSON.parse(localStorage.data);
  
let cols='';
cols +=
`
  <div class="profile-h1">
    <span class="profile-span"><i class="fa fa-user m-2" aria-hidden="true"></i>Name :</span> <h3 class="mt-2">${profile.firstName} ${profile.lastName}</h3>
  </div>
  <div class="profile-h1">
    <span class="profile-span"><i class="fa fa-mail-bulk  m-2" aria-hidden="true"></i>Email:</span> <h3 class="mt-2"> ${profile.email}</h3>
  </div>
  <div class="profile-h1">
    <span class="profile-span"><i class="fa fa-mobile m-2" aria-hidden="true"></i>Phone :</span> <h3 class="mt-2"> ${profile.phone}</h3>
  </div>

`
document.getElementById("profileEmail").innerHTML=cols;

  // /////////////////////////User Name in navbar/////////////////////////////////////////////////////////////
  let col='';
  col +=
  `
  <li  class="nav-item">
  
    ${profile.firstName} ${profile.lastName}
  </li>
  `
  document.getElementById("userName").innerHTML=col;
  }catch(profile){
    window.location.href="login.html"}



 ///////////////////logout//////////////////////////////
 function logout(){
    setTimeout(myfunction,1000)
  }
  function myfunction(){
    localStorage.removeItem("data")
    localStorage.removeItem("token")
    location.href="login.html"
}

// /////////////////////////Loading//////////////////////////////////////////////////////////////////
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
// ////////////////////////////////////////////////////////////