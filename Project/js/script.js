// Function to validate email and password
function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById('emailError').innerHTML = "";
    }

    // Validate password
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerHTML = "Password must be between 6 to 20 characters long and contain at least one numeric digit, one uppercase and one lowercase letter.";
        return false;
    } else {
        document.getElementById('passwordError').innerHTML = "";
    }

    // If both email and password are valid, return true to submit the form
    return true;
}

function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (username == "" || email == "" || password == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}
