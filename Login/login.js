var regno = document.getElementById("regnumber");
var password = document.getElementById("pass");

const user = { regNo: 2012269, password: "Sameer123" }

function validateForm() {
    // Validating regNumber
    if (isNaN(regno.value)) {
        alert("Registration number must be a Integer.");
        return false;
    }

    if (regno.value.length !== 7) {
        alert("Registration number must be a 7-digit number.");
        return false;
    }

    // Validating password
    if (password.value.length < 8) {
        alert("Password must be 8 characters long");
        return false;
    }

    // printing input values on console
    console.log("Registration Number: " + regno.value);
    console.log("Password: " + password.value);

    return true;
}

const checkUser = () => {

    if (+regno.value !== user.regNo) {
        alert("User not found")
        return false;
    }

    if (password.value !== user.password) {
        alert(`Invalid password for user ${regno.value}`)
        return false;
    }

    return true;
}

function redirect() {
    event.preventDefault()
    if (validateForm() && checkUser()) {
        window.location.assign("../Home/home.html");
    }
    else {
        alert("Cannot redirect");
    }
}

function passToggle() {
    var element = document.getElementById("pass-eye");

    if (password.type === "password") {
        password.type = "text";
        element.classList.add('fa-eye-slash');
    } else {
        password.type = "password";
        element.classList.remove('fa-eye-slash');
    }
}

//Close the menu when a link is clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('toggle').checked = false;
    });
});
