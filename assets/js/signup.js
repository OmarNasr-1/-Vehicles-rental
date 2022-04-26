// var firstName = document.getElementById('firstName')
// var lastName = document.getElementById('lastName')
// var password = document.getElementById('password')
// var cpassword = document.getElementById('cpassword')
// var email = document.getElementById('email')
// var phone = document.getElementById('phone')
// // var age = document.getElementById('age')
// // var role = document.getElementById('role')
// var response = fetch(`https://car-rental-eg.herokuapp.com/getAllUser`);
// var users = []


// response.then(res => res.json()).then(user => {
//     users = user.data;
//     isEmailExist()
// })

// function isEmailExist() {
//     for (var i = 0; i < users.length; i++) {
//         if (users[i].email.toLowerCase() == email.value.toLowerCase()) {
//             return false
//         }
//     }
// }

// function signUp() {
//     try {
//         if (firstName.value == "" || lastName.value == "" || password.value == "" || email.value == "" || cpassword.value == "" || phone.value == "") {
//             // Fetch all the forms we want to apply custom Bootstrap validation styles to
//             var forms = document.querySelectorAll(".needs-validation");
//             (function () {
//                 ("use strict");

//                 // Loop over them and prevent submission
//                 Array.prototype.slice.call(forms).forEach(function (form) {
//                     form.addEventListener(
//                         "submit",
//                         async function (event) {
//                             if (!form.checkValidity()) {
//                                 event.preventDefault();
//                                 event.stopPropagation();
//                             }

//                             form.classList.add("was-validated");
//                         },
//                         false
//                     );
//                 });
//             })();
//         } else {
//             const url = `https://car-rental-eg.herokuapp.com/singup`;
//             const formEl = document.querySelector("form");
//             formEl.addEventListener("submit", async (e) => {
//                 e.preventDefault();
//                 const formData = new FormData(formEl);
//                 const formDataSerialized = Object.fromEntries(formData);
//                 const jsonObject = { ...formDataSerialized };
//                 try {
//                     const response = await fetch(url, {
//                         method: "POST",
//                         body: JSON.stringify(jsonObject),
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                     });
//                     const json = await response.json();
//                     if (isEmailExist() == false) {
//                         document.getElementById('exist').innerHTML = `
//             <div class="alert alert-danger" role="alert">
//               EMAIL ALREADY EXISTS
//             </div>`
//                     } else {
//                         document.getElementById('exist').innerHTML = `
//             <div class="alert alert-success" role="alert">
//               SUCCESS
//             </div>`
//                     }
//                     console.log(json);
//                 } catch (e) {
//                     console.error(e);
//                     alert("there as an error");
//                 }
//             });
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

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