// Login Form

let loginForm = document.getElementById("loginForm");


// Show / Hide Password

let showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", function() {

    let password = document.getElementById("loginPassword");

    if (password.type == "password") {

        password.type = "text";

        showPassword.innerHTML = "Hide";

    }

    else {

        password.type = "password";

        showPassword.innerHTML = "Show";

    }

});


// Login Validation

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    // Get Input Values

    let email = document.getElementById("loginEmail").value.trim();

    let password = document.getElementById("loginPassword").value;


    // Error Elements

    let emailError = document.getElementById("emailError");

    let passwordError = document.getElementById("passwordError");

    let loginError = document.getElementById("loginError");


    // Clear Previous Errors

    emailError.innerHTML = "";

    passwordError.innerHTML = "";

    loginError.innerHTML = "";


    let valid = true;


    // Email Validation

    
    function validateEmail() {

        let Email = document.getElementById("Email").value.trim();
    
        let Error = document.getElementById("emailError");
    
        let regexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (Email == "") {
    
            emailError.innerHTML = "Please Enter The Email";
            return false;
    
        }
    
        else if (!regexpression.test(Email)) {
    
            emailError.innerHTML = "Please Enter The Right Email Format";
            return false;
    
        }
    
        else {
    
            Error.innerHTML = "";
            return true;
    
        }
    
    }



    // Password Validation

    if (password == "") {

        passwordError.innerHTML = "Please enter your password.";

        valid = false;

    }

    else if (password.length < 6) {

        passwordError.innerHTML =
            "Password must contain at least 6 characters.";

        valid = false;

    }


    // Final Validation

    if (valid == true) {

        loginError.style.color = "green";

        loginError.innerHTML = "Login form validation successful!";

    }

});
