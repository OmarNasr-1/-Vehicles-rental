let recipes = [];
async function getCars() {
//  let userID=JSON.parse(localStorage.data);
//  let showId=userID.id;
  let response = await fetch("https://car-rental-eg.herokuapp.com/ownerbookingRate/62216686945c286035a19aae");
  let myData = await response.json();
  console.log(myData)
  recipes = myData.data;
  console.log(recipes)
  
}

function displayrecipes() {
  let cols = '';

  for (let i = 0; i < recipes.length; i++) {
    cols +=
    `
    <div class="col-md-4 ">
      <div class="receipe">
          <img class="w-100 recipe-img rounded" src="${recipes[i].VehicleID.imageURL[0]}" alt="">

          <div class="receipe-caption">
            <h3>${recipes[i].VehicleID.brand}</h3>
            <h4 >${recipes[i].VehicleID.model}</h4>
            <h4 >${recipes[i].DateFrom}</h4>
            </div>
          <div class="slider"></div>
      </div>

      <form id="myForm" enctype="multipart/form-data"  class="needs-validation" novalidate>
      <div class="row g-3 mt-3 w-75 m-auto">

        <div class="col-md-3">
          <input type="number" min="0" max="5"  class="form-control" name="VehicleRate" id="VehicleRate"  placeholder="CC" value=""
          required />
          <div class="invalid-feedback">CC is required</div>
        </div>
        <div class="col-md-12 text-center">
          <button id="submitBtn" onclick='Rate(recipes[${i}].VehicleID._id)' type="submit">AddCar</button>
        </div>
      </div>
      </form>
      
      
    </div>
  `
  }

  document.getElementById("rateCars").innerHTML = cols
};

async function controler() {
  await getCars();
  displayrecipes();
}

controler()
// ///////////////////////////////////////////////////////////

function Rate(Id){
  alert(Id)
  $('#myForm').submit(function(event) {
    event.preventDefault();
    //var actionUrl = $(this).attr('action');
    //var formData = new FormData(this);
    var form = $("#myForm");
  
    $.ajax({
      url: `https://car-rental-eg.herokuapp.com/updateVehicleRate/${Id}`,
      method: "POST",
      headers:
      {
        
      },
      
    data: form.serialize(),
    success: function(data) {
          
        // Ajax call completed successfully
        alert("Successfully Updated");
        
      // location.reload();

    },
    error: function(data) {
          
        // Some error in ajax call
        alert("some Error");
        
    }
  })
  });
}


// function Rate(Id){
//   alert(Id)
//   $('#myForm').submit(function(event) {
//     event.preventDefault();

//     //var actionUrl = $(this).attr('action');
//     var formData = new FormData(this);

    
//     $.ajax({
//       url: `https://car-rental-eg.herokuapp.com/updateVehicleRate/${Id}`,
//       method: "POST",
//       headers:
//        {
       
       
//         "Access-Control-Allow-Origin" : '*'
//     },
//       dataType: "json",
//       contentType: false,
//       data: formData,
//       processData: false,
//       success: function(data) {
//         console.log(data)
//         alert("Sucssec");
//         location.reload();

//       },
//       error: function(data) {
        
//         // Some error in ajax call
//         alert("some Error.....Basic information must be filled out");
//     }
//     });
//   });
// }


// function Rate(Id){
//   $(() => {
//     // function will get executed 
//     // on click of submit button
//     alert(Id)
//     $("#submitButton").click(function(ev) {
//         var form = $("#myForm");
//         //var url = form.attr('action');
//         $.ajax({
//             type: "POST",
//             url:`https://car-rental-eg.herokuapp.com/updateVehicleRate/${Id}` ,
//             headers:
//          {
//           "authorization":JSON.parse(localStorage.getItem('token')),
//           "Access-Control-Allow-Origin" : '*'
        
//         },
//             data: form.serialize(),
//             success: function(data) {
                  
//                 // Ajax call completed successfully
//                 alert("Form Submited Successfully");
//             },
//         })
//     })
//   });
// }










// /////////////////////////////////////////////////////////
let test;
try{
  profile = JSON.parse(localStorage.data);
  localStorage.test=true
  let col='';
  col +=
  `
  <li  class="nav-item">
  ${profile.firstName}
  ${profile.lastName}
  </li>
  `
  document.getElementById("userName").innerHTML=col;
}catch(profile){localStorage.test=false}

// ////////////////logout////////////////////////////////////////////

function logout(){
    setTimeout(myfunction,1000)
  }
  function myfunction(){
    localStorage.removeItem("data")
    localStorage.removeItem("token")
    location.href="login.html"
}
// /////////////////////loading/////////////////////////////////////////

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

/////////////////////////////// SEARCH ////////////////////////////////////////
function search(val){
    let cols = '';
  
    for (let i = 0; i < cars.length; i++) {
      if(cars[i].brand.toLowerCase().includes(val.toLowerCase()))
      {
        cols +=
        `
          <div class="col-md-4 ">
            <div class="receipe">
                <img class="w-100 recipe-img rounded" src="${cars[i].imageURL[0]}" alt="">
  
                <div class="receipe-caption">
                  <h3>${cars[i].brand}</h3>
                  <h4 >${cars[i].model}</h4>
                  <h4 > ${cars[i].color}</h4>
                  <h4 >${cars[i].pricePerDay} LE Per-Day</h4>
                  <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='getSingleRecipe(cars[${i}]._id)' class="btn btn-info mt-2">detalis</a>
                </div>
                <div class="slider"></div>
            </div>
            
          </div>
        `
      }
    }
     
    document.getElementById("reciptsRow").innerHTML = cols
  
  }