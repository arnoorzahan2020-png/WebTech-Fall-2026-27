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

    if (email == "") {

        emailError.innerHTML = "Please enter your email.";

        valid = false;

    }

    else if (!email.includes("@") || !email.includes(".")) {

        emailError.innerHTML = "Please enter a valid email.";

        valid = false;

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
