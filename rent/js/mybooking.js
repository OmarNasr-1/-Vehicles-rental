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

// ////////////////logout////////////////////////////////////////////

function logout(){
  setTimeout(myfunction,1000)
}
function myfunction(){
  localStorage.removeItem("data")
  localStorage.removeItem("token")
  location.href="login.html"
}

// ///////////////////////profile name in navbar////////////////////////////////////////////////////
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
}catch(profile){window.location.href="login.html"}




// //////////////////////////////Show Book user//////////////////////////////////////////////////

let recipes = [];
async function getCars() {
 let userID=JSON.parse(localStorage.data);
 let showId=userID.id;
  let response = await fetch(`https://car-rental-eg.herokuapp.com/userbooking/${showId}`);
  let myData = await response.json();
  recipes = myData.data;
  console.log(recipes)
}

function displayrecipes() {
  let cols = '';

  for (let i = 0; i < recipes.length; i++) {
    cols +=
      `
      <table  class="table mt-5 w-75 m-auto table-striped">
      <thead class="thead-light ">
        <tr class="text-center bgg">
          <th scope="col"></th>
          <th scope="col">Photo</th>
          <th scope="col">Brand</th>
          <th scope="col">Pickup Location</th>
          <th scope="col">return Location</th>
          <th scope="col">Date From</th>
          <th scope="col">Date To</th>
          <th scope="col">Company Name</th>
          <th scope="col">Company Phone</th>
          <th scope="col">message</th>
          <th scope="col">My Order</th>
        </tr>
      </thead>
      <tbody class="">
          
        <tr class="text-center bggg ">
          <th  scope="row">${(i+1)}</th>
          
          <td > <img  width="75px"  height="50px" src="${recipes[i].VehicleID.imageURL[0]}"   alt="">   </td>
          <td>${recipes[i].VehicleID.brand}</td>
          <td>${recipes[i].Pick_upLocation}</td>
          <td>${recipes[i].return_Location}</td>
          <td>${recipes[i].DateFrom}</td>
          <td>${recipes[i].DateTo}</td>
          <td>${recipes[i].VehicleID.companyID.CompanyName}</td>
          <td>${recipes[i].VehicleID.companyID.Hotline}</td>
          <td>${recipes[i].message}</td>
          <td><button  class="btn btn-transport classborder">${recipes[i].status}</button></td>
          <td><button onclick='getSingleRecipe(recipes[${i}]._id)' class="btn btn-danger">Delete</button></td>
        </tr>
      
      </tbody>
    </table>
    `
  }

  document.getElementById("reciptsRows").innerHTML = cols
};

async function controler() {
  await getCars();
  displayrecipes();
}

controler()


// /////////////////////delete book user/////////////////////////////////

function getSingleRecipe(recipeId){
  alert("Are you sure to delete the request?")
  $.ajax({
      method:"DELETE",
      url: `https://car-rental-eg.herokuapp.com/deleteBooking/${recipeId}`,
      headers:
          {
            "authorization": JSON.parse(localStorage.getItem('adminToken')),
            "Access-Control-Allow-Origin" : '*'
          },
          success:function() {
            location.reload();
        }
   
  });
}
// //////////////////////Animation Wow//////////////////////////////////////////////////////////
new WOW().init();
// /////////////////////////////////////////////////////////////