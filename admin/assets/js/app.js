'use strict';

/* ===== Enable Bootstrap Popover (on element  ====== */

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

/* ==== Enable Bootstrap Alert ====== */
var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
});


/* ===== Responsive Sidepanel ====== */
const sidePanelToggler = document.getElementById('sidepanel-toggler'); 
const sidePanel = document.getElementById('app-sidepanel');  
const sidePanelDrop = document.getElementById('sidepanel-drop'); 
const sidePanelClose = document.getElementById('sidepanel-close'); 

window.addEventListener('load', function(){
	responsiveSidePanel(); 
});

window.addEventListener('resize', function(){
	responsiveSidePanel(); 
});


function responsiveSidePanel() {
    let w = window.innerWidth;
	if(w >= 1200) {
	    // if larger 
	    //console.log('larger');
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');
		
	} else {
	    // if smaller
	    //console.log('smaller');
	    sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');
	}
};

sidePanelToggler.addEventListener('click', () => {
	if (sidePanel.classList.contains('sidepanel-visible')) {
		console.log('visible');
		sidePanel.classList.remove('sidepanel-visible');
		sidePanel.classList.add('sidepanel-hidden');
		
	} else {
		console.log('hidden');
		sidePanel.classList.remove('sidepanel-hidden');
		sidePanel.classList.add('sidepanel-visible');
	}
});



sidePanelClose.addEventListener('click', (e) => {
	e.preventDefault();
	sidePanelToggler.click();
});

sidePanelDrop.addEventListener('click', (e) => {
	sidePanelToggler.click();
});


// //////////////////////////////////////////////////////

function logout(){
	setTimeout(myfunction,1000)
  }
  function myfunction(){
	localStorage.removeItem("adminDate")
	localStorage.removeItem("adminToken")
	location.href="admin-login.html"
}

// //////////////////////////////////////////////////////////////
try{
  let profile = JSON.parse(localStorage.adminDate);
 
  let col='';
  col +=
  `
  <li  class="nav-item text-center my-3 text-info">
  ${profile.adminDate.firstName}
  ${profile.adminDate.lastName}
  </li>
  `
  document.getElementById("userName").innerHTML=col;
}catch(profile){}
 
// ///////////////////////order////////////////////////////////////////




let recipes = [];
async function getCars() {
	let CompID=JSON.parse(localStorage.adminDate);
	let showId=CompID.adminDate.conpanyId._id
  console.log(showId)
  let response = await fetch(`https://car-rental-eg.herokuapp.com/ownerbooking/${showId}`);
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
      <table  class="table  table-striped">
      <thead class="thead-light w-75">
        <tr class="bgg text-center">
          <th scope="col"></th>
          <th scope="col">Photo</th>
          <th scope="col">Brand</th>
          <th scope="col">Pickup Location</th>
          <th scope="col">return Location</th>
          <th scope="col">Date From</th>
          <th scope="col">Date To</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">message</th>
          <th scope="col">Requst</th>

        </tr>
      </thead>
      <tbody class="w-75">
          
        <tr class="bggg text-center">
          <th  scope="row">${(i+1)}</th>
          <td > <img  width="75px"  height="50px" src="${recipes[i].VehicleID.imageURL[0]}"   alt="">   </td>
          <td>${recipes[i].VehicleID.brand}</td>
          <td>${recipes[i].Pick_upLocation}</td>
          <td>${recipes[i].return_Location}</td>
          <td>${recipes[i].DateFrom}</td>
          <td>${recipes[i].DateTo}</td>
          <td>${recipes[i].UserID.firstName}
              ${recipes[i].UserID.lastName}
          </td>
          <td>${recipes[i].UserID.phone}</td>
          <td>${recipes[i].message}</td>
          <td> 


     
         
          <button onclick='return accept(recipes[${i}]._id)' type="submit" class="btn btn-info mb-1">Accept</button>

          <button onclick='return reject(recipes[${i}]._id)' type="submit" class="btn btn-danger">Reject</button>

       

           
          </td>
        
      
      </tbody>
    </table>
    `
  }

  document.getElementById("compunyOrder").innerHTML = cols
};

async function controler() {
  await getCars();
  displayrecipes();
}

controler()




function accept(I) {
  // Form fields, see IDs above
  const params = {
    "status": "Accepted"
    
  }
  const http = new XMLHttpRequest()
  http.open('PATCH', `https://car-rental-eg.herokuapp.com/updateBooking/${I}`)
  http.setRequestHeader('Content-type', 'application/json')
  http.send(JSON.stringify(params)) // Make sure to stringify
  http.onload = function() {
      // Do whatever with response
      alert("Requst has been accepted")
  }
}


function reject(I) {
  // Form fields, see IDs above
  const params = {
    "status": "Rejected"
    
  }
  const http = new XMLHttpRequest()
  http.open('PATCH', `https://car-rental-eg.herokuapp.com/updateBooking/${I}`)
  http.setRequestHeader('Content-type', 'application/json')
  http.send(JSON.stringify(params)) // Make sure to stringify
  http.onload = function() {
      // Do whatever with response
      alert("Requst has been rejected")
  }
}