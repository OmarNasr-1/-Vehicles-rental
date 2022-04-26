
// var password = document.getElementById('password')
// var email = document.getElementById('email')
// var response = fetch(`https://car-rental-eg.herokuapp.com/getAllUser`);
// var pathparts = location.pathname.split('/');
// var baseURL = ''
// var users = []

// response.then(res => res.json()).then(user => {
//     users = user.data;
//     login()
// })

// for (var i = 0; i < pathparts.length - 1; i++) {
//     baseURL += '/' + pathparts[i]
// }

// function login() {
//     try {
//         if (email.value == "" || password.value == "") {
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
//             const url = `https://car-rental-eg.herokuapp.com/singin`;
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
//                     const data = await response.json();
//                     console.log(data);
//                     if (data.token) {
//                         localStorage.setItem('data', JSON.stringify(data));
//                         localStorage.setItem('token', JSON.stringify(data.token));
//                         console.log(JSON.parse(localStorage.getItem('data')));
//                         document.getElementById('incorrect').innerHTML = `
//                                 <div class="alert alert-success" role="alert">
//                                 LOGIN SUCCESS
//                                 </div>`
//                         if (baseURL !== '') {
//                             window.location='http://127.0.0.1:5500/index.html#';
                           
//                         } else {
//                             window.location='/index.html'
//                         }
//                     } else {
//                         document.getElementById('incorrect').innerHTML = `
//                                 <div class="alert alert-danger" role="alert">
//                                 INCORRECT EMAIL OR PASSWORD
//                                 </div>`
//                     }
//                 } catch (e) {
//                     console.error(e);
//                     console.log("ERROR");
//                 }
//             });
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
var password = document.getElementById('password')
var email = document.getElementById('email')
var response = fetch(`https://car-rental-eg.herokuapp.com/getAllUser`);
var pathparts = location.pathname.split('/');
var baseURL = ''
var users = []

response.then(res => res.json()).then(user => {
    users = user.data;
    login()
})

for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}

function login() {
    try {
        if (email.value == "" || password.value == "") {
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
            const url = `https://car-rental-eg.herokuapp.com/singin`;
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
                    const data = await response.json();
                    console.log(data);
                    if (data.token) {
                        localStorage.setItem('data', JSON.stringify(data));
                        localStorage.setItem('token', JSON.stringify(data.token));
                        console.log(JSON.parse(localStorage.getItem('data')));
                        document.getElementById('incorrect').innerHTML = `
                                <div class="alert alert-success" role="alert">
                                LOGIN SUCCESS
                                </div>`
                        if (baseURL == '/') {
                            window.location.replace('index.html');
                            // location.replace('https://' + location.hostname + '/index.html')
                        } else {
                            window.location.replace('index.html');
                            // location.replace(baseURL + '/index.html')
                        }
                    } else {
                        document.getElementById('incorrect').innerHTML = `
                                <div class="alert alert-danger" role="alert">
                                INCORRECT EMAIL OR PASSWORD
                                </div>`
                    }
                } catch (e) {
                    console.error(e);
                    console.log("ERROR");
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
}