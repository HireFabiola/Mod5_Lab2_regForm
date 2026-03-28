const form = document.getElementById("registrationForm");

// Add eventlistener on Submit
form.addEventListener("submit", handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent automatic refresh

    // Use default checks integrated in form submission handling
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Load form input elements
    const password1 = document.getElementById("password");
    console.log(password1.value);
    const password2 = document.getElementById("confirmPassword");
    console.log(password2.value);
    const email = document.getElementById("email");
    console.log(email.value);
    const username = document.getElementById("username");
    console.log(username.value);

    // Call to further validate all inputs
    if
        (validateUsername(username.value) && (validatePassword(password1.value, password2.value)) &&
        validateEmail(email.value)) {
        alert("You have succesfully passed all input field checks! Well done!");
    }
    else {
        alert("Sorry, one or more of your inputs did not pass the secondary checks :(");
    }
}

// Function to further validate username
function validateUsername(userName) {
    console.log("I AM HERE");
    console.log(userName.length);
    if (userName.length < 8) {
        alert("Please choose a username atleast 8 characters in length");
        return false;
    }
}

// Function to further validate email
function validateEmail(userEmail) {
    console.log('Made it to validate email');
}

// Function to further validate username
function validatePassword(userPassword1, userPassword2) {
    console.log('Made it to validate password');
}
