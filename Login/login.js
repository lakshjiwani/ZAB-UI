var regno = document.getElementById("regnumber");
var password = document.getElementById("pass");

function validateForm(){
    // Validating regNumber
    if(isNaN(regno.value)){
        console.error("Registration number must be a Integer.");
        return false;
    }

    if(regno.value.length !== 7){
        console.error("Registration number must be a 7-digit number.");
        return false;
    }

    // Validating password
    if(password.value.length < 8){
        console.error("Password must be 8 characters long");
        return false;
    }

    // printing input values on console
    console.log("Registration Number: " + regno.value);
    console.log("Password: " + password.value);

    return true;
}

function redirect(){
    if (validateForm() == true){
        window.location.assign("../ZAB-UI/Home/home.html");
    }
    else{
        console.log("Cannot redirect");
    }
}

//Close the menu when a link is clicked
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('toggle').checked = false;
    });
  });
  