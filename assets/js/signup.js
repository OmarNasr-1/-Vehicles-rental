
var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var password = document.getElementById('password')
var cpassword = document.getElementById('cpassword')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
// var age = document.getElementById('age')
// var role = document.getElementById('role')
var response = fetch(`https://car-rental-eg.herokuapp.com/getAllUser`);
var users = []


response.then(res => res.json()).then(user => {
    users = user.data;
    isEmailExist()
})

function isEmailExist() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == email.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {
    try {
        if (firstName.value == "" || lastName.value == "" || password.value == "" || email.value == "" || cpassword.value == "" || phone.value == "") {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll(".needs-validation");
            (function () {
                ("use strict");

                // Loop over them and prevent submission
                Array.prototype.slice.call(forms).forEach(function (form) {
                    form.addEventListener(
                        "submit",
                        async function (event) {
                            if (!form.checkValidity()) {
                                event.preventDefault();
                                event.stopPropagation();
                            }

                            form.classList.add("was-validated");
                        },
                        false
                    );
                });
            })();
        } else {
            const url = `https://car-rental-eg.herokuapp.com/singup`;
            const formEl = document.querySelector("form");
            formEl.addEventListener("submit", async (e) => {
                e.preventDefault();
                const formData = new FormData(formEl);
                const formDataSerialized = Object.fromEntries(formData);
                const jsonObject = { ...formDataSerialized };
                try {
                    const response = await fetch(url, {
                        method: "POST",
                        body: JSON.stringify(jsonObject),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });
                    const json = await response.json();
                    if (isEmailExist() == false) {
                        document.getElementById('exist').innerHTML = `
            <div class="alert alert-danger" role="alert">
              EMAIL ALREADY EXISTS
            </div>`
                    } else {
                        document.getElementById('exist').innerHTML = `
            <div class="alert alert-success" role="alert">
              SUCCESS
            </div>`
                    }
                    console.log(json);
                } catch (e) {
                    console.error(e);
                    alert("there as an error");
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}
// ///////////////////////////////////////////Validation/////////////////////////////////////////////////////////////

firstName.onkeyup=function(){
  var nameRejex=/^[A-Z][a-z]{2,8}$/
  if(!nameRejex.test(firstName.value))
  {
    sumbitBtn.disabled="true"
    firstName.classList.add("is-invalid");
    firstName.classList.remove("is-valid");
    firstNameAlert.classList.remove("d-none");
    return false;
  }
  else{
    sumbitBtn.removeAttribute("disabled")
    firstName.classList.add("is-valid")
    firstName.classList.remove("is-invalid")
    firstNameAlert.classList.add("d-none");
    return true;
  }
}

lastName.onkeyup=function(){
  var nameRejex=/^[A-Za-z]{3,9}$/
  if(!nameRejex.test(lastName.value))
  {
    sumbitBtn.disabled="true"
    lastName.classList.add("is-invalid");
    lastName.classList.remove("is-valid");
    lastNameAlert.classList.remove("d-none");
    return false;
  }
  else{
    sumbitBtn.removeAttribute("disabled")
    lastName.classList.add("is-valid")
    lastName.classList.remove("is-invalid")
    lastNameAlert.classList.add("d-none");
    return true;
  }
}

// email.onkeyup=function(){
//   var nameRejex=/^[A-Za-z0-9_-]+(gmail)\.com$/
//   if(!nameRejex.test(email.value))
//   {
//     sumbitBtn.disabled="true"
//     email.classList.add("is-invalid");
//     email.classList.remove("is-valid");
//     emailAlert.classList.remove("d-none");
//     return false;
//   }
//   else{
//     sumbitBtn.removeAttribute("disabled")
//     email.classList.add("is-valid")
//     email.classList.remove("is-invalid")
//     emailAlert.classList.add("d-none");
//     return true;
//   }
// }

phone.onkeyup=function(){
  var nameRejex=/^(002)?(01)[0125][0-9]{8}$/
  if(!nameRejex.test(phone.value))
  {
    sumbitBtn.disabled="true"
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
    numberAlert.classList.remove("d-none");
    return false;
  }
  else{
    sumbitBtn.removeAttribute("disabled")
    phone.classList.add("is-valid")
    phone.classList.remove("is-invalid")
    numberAlert.classList.add("d-none");
    return true;
  }
}


password.onkeyup=function(){
  var nameRejex=/^.{7,15}$/
  if(!nameRejex.test(password.value))
  {
    sumbitBtn.disabled="true"
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    passwordAlert.classList.remove("d-none");
    return false;
  }
  else{
    sumbitBtn.removeAttribute("disabled")
    password.classList.add("is-valid")
    password.classList.remove("is-invalid")
    passwordAlert.classList.add("d-none");
    return true;
  }
}

cpassword.onkeyup=function(){
  
  if(password.value != cpassword.value)
  {
    sumbitBtn.disabled="true"
    cpassword.classList.add("is-invalid");
    cpassword.classList.remove("is-valid");
    cpasswordAlert.classList.remove("d-none");
    return false;
  }
  else{
    sumbitBtn.removeAttribute("disabled")
    cpassword.classList.add("is-valid")
    cpassword.classList.remove("is-invalid")
    cpasswordAlert.classList.add("d-none");
    return true;
  }
}
