
let recipes = [];
let links=document.querySelectorAll(".navlink");
let currentMeal;

    for(var i=0;i<links.length;i++){
        links[i].addEventListener("click",function(e){
           currentMeal=e.target.text;
        //   getCars(e.target.text)
        controler();

        })
    }

async function getCars(meal="car") {
  let response = await fetch(`https://car-rental-eg.herokuapp.com/getOneVehicle?Vehicletype=${meal}`);
  let myData = await response.json();
  recipes = myData.data;
  
}

function displayrecipes() {
  let cols = '';

  for (let i = 0; i < recipes.length; i++) {
    cols +=
      `
    <div class="col-md-4 ">
      <div class="receipe">
          <img class="w-100 recipe-img rounded" src="${recipes[i].imageURL[0]}" alt="">

          <div class="receipe-caption">
            <h3>${recipes[i].brand}</h3>
            <h4 >${recipes[i].model}</h4>
            <h4 > ${recipes[i].color}</h4>
            <h4 >${recipes[i].pricePerDay} LE Per-Day</h4>
            <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='getSingleRecipe(recipes[${i}]._id)' class="btn btn-info mt-2">detalis</a>
          </div>
          <div class="slider"></div>
      </div>
      
    </div>
  `
  }

  document.getElementById("reciptsRow").innerHTML = cols
};

async function controler() {

  await getCars(currentMeal);
  displayrecipes();
}

controler();


/////////////////////////////////////////////////////////////////

let recipesDetals = [];
async function getSingleRecipe(recipeId) {
  let response = await fetch(`https://car-rental-eg.herokuapp.com/getOne/${recipeId}`);
  recipesDetals = await response.json();
  localStorage.recipesDetals = JSON.stringify(recipesDetals);
  myData=recipesDetals.data
  displaySingleRecipe();

}

function displaySingleRecipe() {
  var details = myData;

  // ROW ONE If con details//////

  var AirBag="",seatBelt="",ABS="" ;
  if(details.airbag){
    AirBag=`   
     <div class="sectionone">
        <i class="fas fa-bowling-ball"></i>
        <p class="sett">AirBag</p>
    </div>`
  }
  if(details.seatbelts){
    seatBelt=`  
    <div class="sectionone">
      <i class="fas fa-bacon"></i>
      <p class="sett">seat belt</p>
    </div> 
    `
  }
  if(details.ABS){
    ABS=`  
    <div class="sectionone">
      <i class="far fa-dot-circle"></i>
      <p class="sett">ABS</p>
    </div> 
    `
  }

  // ROW TWO If con details//////
  var Sunroof="",ParkingSensors="",Radio="",NavigationSystem="",Bluetooth="", RemoteStart="",AC="" ;
  if(details.sunroof){
    Sunroof=` 
    <div class="sectionone">
      <i class="fas fa-chess-rook"></i>
      <p class="h2-one">Sunroof</p>
    </div>  `
  }
  if(details.Parking_Sensors){
    ParkingSensors=` 
    <div class="sectionone">
      <i class="fas fa-bacon"></i>
      <p class="h2-one">Parking <br> Sensors</p>
    </div>
     `
  }
  if(details.Radio){
    Radio=` 
    <div class="sectionone">
      <i class="fas fa-broadcast-tower"></i>
      <p class="h2-one">Radio</p>
    </div>
     `
  }
  if(details.Navigation_System){
    NavigationSystem=` 
    <div class="sectionone">
      <i class="fas fa-address-card"></i>
      <p class="h2-one">Navigation <br> System</p>
    </div>
     `
  }
  if(details.Bluetooth){
    Bluetooth=` 
    <div class="sectionone">
      <i class="fab fa-bluetooth"></i>
      <p class="h2-one">Bluetooth</p>
    </div>
     `
  }
  if(details.Remote_Start){
    RemoteStart=` 
    <div class="sectionone">
      <i class="fab fa-app-store"></i>
      <p class="h2-one">Remote <br> Start</p>
    </div>
     `
  }
  if(details.AC){
    AC=` 
    <div class="sectionone">
      <i class="far fa-dot-circle"></i>
      <p class="h2-one">AC</p>
    </div>

     `
  }
    // ROW Three If con details//////
    var Automatic="";
    if(details.Automatic){
      Automatic=` 
      <div class="sectionone">
        <p>Automatic</p>
      </div>
      `
    }

    // ROW four If con details//////
  var ExtraTyre="",Charger="",FireExtingUisher="",FirstAidKit="",CarSeat="" ;
  if(details.Extra_Tyre){
    ExtraTyre=`
    <div class="sectionone">
      <i class="fas fa-plus-circle"></i>
      <p class="h2-one">Extra Tyre</p>
    </div>
   `
  }
  if(details.Charger){
    Charger=`
    <div class="sectionone">
      <i class="fas fa-battery-three-quarters"></i>
      <p class="h2-one">Charger</p>
    </div>
   `
  }
  if(details.Fire_Extinguisher){
    FireExtingUisher=`
    <div class="sectionone">
      <i class="fas fa-fire-extinguisher"></i>
      <p class="h2-one">Fire exting uisher</p>
    </div>
   `
  }
  if(details.First_Aid_Kit){
    FirstAidKit=`
    <div class="sectionone">
      <i class="fas fa-medkit"></i>
      <p class="h2-one">First Aid Kit</p>
    </div>
   `
  }
  if(details.CarSeat){
    CarSeat=`
    <div class="sectionone">
      <i class="fas fa-chess-rook"></i>
      <p class="h2-one">Car seat</p>
    </div>
   `
  }
    // ROW five If con details//////
  var Smoking="" ;
  if(details.Smoking_Preferences){
    Smoking=`
    <div class="sectionone">
      <i class="fas fa-smoking"></i>
      <p class="h2-one">Smoking</p>
    </div>`
  }
    
  
  
  let recipeDetalsData =
    `
  <div class="recipesDetals">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="${details.imageURL[0]}" class="d-block w-100 edit" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h4 class="h4">${details.brand}</h4>
          <p class="text-white"></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="${details.imageURL[1]}" class="d-block w-100 edit" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h4 class="h4">${details.brand}</h4>
          <p></p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="${details.imageURL[2]}" class="d-block w-100 edit" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h4 class="h4">${details.brand}</h4>
          <p></p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon colorCarsol"  aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon colorCarsol" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="row-one">
    <div class="partone">
      <i class="fas  fa-shield-alt"></i>
      <h5>Safty</h5>
    </div>

    <div class="parttwo">
      ${AirBag}

      ${seatBelt}

      ${ABS}
    
    </div>
  </div>

  <div class="row-two">
    <div class="partone">
      <i class="fas fa-star"></i>
      <h5>Features</h5>
    </div>

    <div class="parttwo">
     
        ${Sunroof}

        ${ParkingSensors}

        ${Radio}

        ${NavigationSystem}

        ${Bluetooth}

        ${RemoteStart}

        ${AC}
    </div>
  </div>

  <div class="row-three">
    <div class="partone">
      <i class="fas fa-cog"></i>
      <h5>Engine</h5>
    </div>

    <div class="parttwo">
     
      ${Automatic}

      <div class="sectionone">
        <p>CC: ${details.CC}</p>
      </div>
    </div>
  </div>

  <div class="row-four">
    <div class="partone">
      <i class="fas fa-hat-wizard"></i>
      <h5>Accessories</h5>
    </div>

    <div class="parttwo">
     
      ${ExtraTyre}
      
      ${Charger}

      ${FireExtingUisher}

      ${FirstAidKit}

      ${ CarSeat}
    </div>
  </div>

  <div class="row-five">
    <div class="partone">
      <i class="fas fa-smoking"></i>
      <h5>Smoking Preferences</h5>
    </div>

    <div class="parttwo">
     
    ${Smoking}

    </div>
  </div>
  `;
  document.getElementById("recipeData").innerHTML = recipeDetalsData
}

/////////////////////////////// SEARCH ////////////////////////////////////////
function search(val){
  let cols = '';

  for (let i = 0; i < recipes.length; i++) {
    if(recipes[i].brand.toLowerCase().includes(val.toLowerCase()))
    {
      cols +=
      `
        <div class="col-md-4 ">
          <div class="receipe">
              <img class="w-100 recipe-img rounded" src="${recipes[i].imageURL[0]}" alt="">

              <div class="receipe-caption">
                <h3>${recipes[i].brand}</h3>
                <h4 >${recipes[i].model}</h4>
                <h4 > ${recipes[i].color}</h4>
                <h4 >${recipes[i].pricePerDay} LE Per-Day</h4>
                <a data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick='getSingleRecipe(recipes[${i}]._id)' class="btn btn-info mt-2">detalis</a>
              </div>
              <div class="slider"></div>
          </div>
          
        </div>
      `
    }
  }
   
  document.getElementById("reciptsRow").innerHTML = cols

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
}catch(profile){localStorage.test=false}


/////////////////////////////check user is log in or not/////////////////////////////////////////////////////////

let bookNow=document.getElementById("bookNow");



bookNow.addEventListener("click",function(){

  if(localStorage.test=='true'){
   window.location.href='booking.html';
   
  }else
  {
    window.location.href='login.html';
  }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////// 
