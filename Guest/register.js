
console.log("Register JS Connected");



document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            if (!collect_data()) {
                event.preventDefault();
            }

            else {
                event.preventDefault();
                alert("Registration Successful!");
            }

        });

    }

});



function collect_data() {

    let validName = validateName();
    let validPhone = validatePhone();
    let validEmail = validateEmail();
    let validPassword = validatePassword();
    let validConfirm = validateConfirmPassword();

    return validName && validPhone && validEmail &&
           validPassword && validConfirm;
}



function validateName() {

    let name = document.getElementById("FullName").value.trim();

    let Error = document.getElementById("NameError");

    if (name == "") {

        Error.innerHTML = "Enter Your Name";
        return false;

    }

    else if (name.length < 6) {

        Error.innerHTML = "Name Must be at least 6 Char";
        return false;

    }

    else {

        Error.innerHTML = "";
        return true;

    }

}



function validatePhone() {

    let phone = document.getElementById("PhoneNumber").value.trim();

    let Error = document.getElementById("PhoneError");

    let regexpression = /^01[3-9][0-9]{8}$/;

    if (phone == "") {

        Error.innerHTML = "Please Enter Your Phone Number";
        return false;

    }

    else if (!regexpression.test(phone)) {

        Error.innerHTML = "Please Enter a Valid Phone Number";
        return false;

    }

    else {

        Error.innerHTML = "";
        return true;

    }

}



function validateEmail() {

    let Email = document.getElementById("Email").value.trim();

    let Error = document.getElementById("EmailError");

    let regexpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (Email == "") {

        Error.innerHTML = "Please Enter The Email";
        return false;

    }

    else if (!regexpression.test(Email)) {

        Error.innerHTML = "Please Enter The Right Email Format";
        return false;

    }

    else {

        Error.innerHTML = "";
        return true;

    }

}



function validatePassword() {

    let password = document.getElementById("Password").value;

    let Error = document.getElementById("PasswordError");

    if (password == "") {

        Error.innerHTML = "Please Enter Your Password";
        return false;

    }

    else if (password.length < 6) {

        Error.innerHTML = "Password Must be at least 6 Char";
        return false;

    }

    else {

        Error.innerHTML = "";
        return true;

    }

}



function validateConfirmPassword() {

    let password = document.getElementById("Password").value;

    let confirmPassword = document.getElementById("ConfirmPassword").value;

    let Error = document.getElementById("ConfirmError");

    if (confirmPassword == "") {

        Error.innerHTML = "Please Confirm Your Password";
        return false;

    }

    else if (password != confirmPassword) {

        Error.innerHTML = "Password Does Not Match";
        return false;

    }

    else {

        Error.innerHTML = "";
        return true;

    }

}
