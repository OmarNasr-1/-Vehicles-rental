

  /*---------------------------------------------------------------- textarea */


$(function () {

    "use strick";
    var max = 150;
  
    $("textarea").keyup(function () {
  
      var length = $(this).val().length;
      var character = max - length;
  
      console.log(character)
  
      if (character <= 0) {
        $("#char").text("your available character finished");
  
      } else {
  
        $("#char").text(character);
      }
  
    });
  
  
  });
  

// ////////////////////////////////profile name in navbar///////////////////////////////////////////////

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
// //////////////////////////////////////////End profile name in navbar//////////////////////////////////////////////////////////////
// //////////////////////Animation Wow//////////////////////////////////////////////////////////
new WOW().init();
// /////////////////////////////////////////////////////////////


    





