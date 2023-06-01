const image_input = document.querySelector('#image_input');
var uploaded_image = "";

// JavaScript code to handle dropdown functionality
const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu');


function registerCourses() {
    // Your code for handling individual checkbox registration
}

document.addEventListener("DOMContentLoaded", function () {
    var submitButton = document.getElementById("submitButton");
    var resetButton = document.getElementById("resetButton");

    resetButton.addEventListener("click", function () {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
    });

    submitButton.addEventListener("click", function () {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        if (checkboxes.length > 0) {
            alert("Courses registered successfully!");
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = false;
            });
        }
    });

    registerCourses();
});

