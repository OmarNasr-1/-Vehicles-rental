carID = document.getElementById("Car_id")
// carName = document.getElementById("Car_name")
Car_photo=document.getElementById("Car_photo")
carsDetals = JSON.parse(localStorage.carsDetals);

carID.value = carsDetals.data._id;
// carName.value = carsDetals.data.brand;
Car_photo.src=carsDetals.data.imageURL[0];

// /////////////////////////////////////////////////////////////////////

// window.addEventListener("load", () => {
//     picker.attach({ target: "inputpop" });
//   });
//   window.addEventListener("load", () => {
//     picker.attach({ target: "inputpoop" });
//   });

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
///////////////////////////////userToken in rent form///////////////////////////////

    // // function will get executed 
    // // on click of submit button
    // $("#submitButton").click(function(ev) {
    //     var form = $("#myForm");
    //     var url = form.attr('action');
    //     $.ajax({
    //         type: "POST",
    //         url:url ,
    //         headers:
    //      {
    //       "authorization":JSON.parse(localStorage.getItem('token')),
    //       // "Access-Control-Allow-Origin" : '*'
        
    //     },
    //         data: form.serialize(),
    //         success: function(data) {
                  
    //             // Ajax call completed successfully
    //             alert("Form Submited Successfully");
    //         },
    //     })
    // });

// ////////////////////////////////////////////////////////////////////////////////

    $('#myForm').submit(function(event) {
      event.preventDefault();
      //var actionUrl = $(this).attr('action');
      //var formData = new FormData(this);
      var form = $("#myForm");
     
      $.ajax({
        url: `https://car-rental-eg.herokuapp.com/booking`,
        method: "POST",
        headers:
         {
          "authorization":JSON.parse(localStorage.getItem('token')),
          "Access-Control-Allow-Origin" : '*'
        },
        
      data: form.serialize(),
      success: function(data) {
            
          // Ajax call completed successfully
          //alert("Successfully Updated");
          document.getElementById('exist').innerHTML = `
          <div class="wow backInLeft alert alert-success text-center" role="alert"data-wow-duration="1.5s">
          SUCCESS
          <div>Please check your reservation from the page <button class="btn btn-info rounded-pill"><a href="mybooking.html">My booking</a></button> </div>
        </div>
          `
        // location.reload();

      },
      error: function(data) {
            
          // Some error in ajax call
          //alert("some Error");
          document.getElementById('exist').innerHTML = `
          <div class="wow backInLeft alert alert-danger" text-center" role="alert"data-wow-duration=".5s">
          please fill all form in a correct way..
                  </div>
          `
      },
    })
    });


    // //////////////////Validation////////////////////////////



    var PickupLocation = document.getElementById('PickupLocation')
    var lastName = document.getElementById('lastName')
    var password = document.getElementById('password')
    var cpassword = document.getElementById('cpassword')
    var email = document.getElementById('email')
    var phone = document.getElementById('phone')

    PickupLocation.onkeyup=function(){
      var nameRejex=/^[A-Za-z-]{15,30}$/
      if(!nameRejex.test(PickupLocation.value))
      {
        submitButton.disabled="true"
        PickupLocation.classList.add("is-invalid");
        PickupLocation.classList.remove("is-valid");
        PickupLocationAlert.classList.remove("d-none");
        return false;
      }
      else{
        submitButton.removeAttribute("disabled")
        PickupLocation.classList.add("is-valid")
        PickupLocation.classList.remove("is-invalid")
        PickupLocationAlert.classList.add("d-none");
        return true;
      }
    }


    returnLocation.onkeyup=function(){
      var nameRejex=/^[A-Za-z-]{18,30}$/
      if(!nameRejex.test(returnLocation.value))
      {
        submitButton.disabled="true"
        returnLocation.classList.add("is-invalid");
        returnLocation.classList.remove("is-valid");
        returnLocationAlert.classList.remove("d-none");
        return false;
      }
      else{
        submitButton.removeAttribute("disabled")
        returnLocation.classList.add("is-valid")
        returnLocation.classList.remove("is-invalid")
        returnLocationAlert.classList.add("d-none");
        return true;
      }
    }
    // //////////////////////Animation Wow//////////////////////////////////////////////////////////
new WOW().init();
// /////////////////////////////////////////////////////////////
