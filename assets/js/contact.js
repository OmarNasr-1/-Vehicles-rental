var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
//********************************** subscribe************************************ */


// var form2 = document.getElementById("my-sub-form");
// async function handleSubmit2(event) {
//   event.preventDefault();
//   var data = new FormData2(event.target);
//   fetch(event.target.action, {
//     method: form2.method,
//     body: data,
//     headers: {
//         'Accept': 'application/json'
//     }
//   })
// }
// form2.addEventListener("my-sub-button", handleSubmit2)