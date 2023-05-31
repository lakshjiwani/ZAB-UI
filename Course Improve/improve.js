const image_input = document.querySelector('#image_input');
var uploaded_image = "";

// JavaScript code to handle dropdown functionality
const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('change', function () {
    menu.style.display = this.checked ? 'grid' : 'none';
});

image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector('#display_image').style.backgroundImage = `url(${uploaded_image})`;
    });

    reader.readAsDataURL(this.files[0]);
});

function improveCourses() {
    // Your code for handling individual checkbox registration
}

document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submitButton");
    var resetButton = document.getElementById("resetButton");

    submitButton.addEventListener("click", function () {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        if (checkboxes.length > 0) {
            alert("Request for course improvement submitted successfully!");
        }
    });

    resetButton.addEventListener("click", function () {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    });

    improveCourses();
});

