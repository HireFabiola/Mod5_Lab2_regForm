const form = document.getElementById("registrationForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const usernameFeedback = document.getElementById("usernameError");
const passwordFeedback = document.getElementById('passwordError');
const confirmPasswordFeedback = document.getElementById("confirmPasswordError");

// Add eventlistener on Submit
form.addEventListener("submit", handleSubmit);

// Add eventListener on username field
usernameField.addEventListener("input", handleUsernameField);

// Add eventListener on password field
passwordField.addEventListener("input", handlePasswordField);

// Add eventListener on confirm password field
confirmPasswordField.addEventListener("input", handlecConfirmPasswordField);


//Function to handle confirm password field in real time
function handlecConfirmPasswordField(event) {
    const pwd = password.value;
    const confirmPwd = confirmPassword.value;

    // Compare the values and update the message
    if (confirmPwd.length === 0) {
        // Clear the message if the confirm field is empty
        confirmPasswordFeedback.textContent = '';
    } else if (pwd === confirmPwd) {
        confirmPasswordFeedback.textContent = 'Passwords match!';
        confirmPasswordFeedback.style.color = 'green';
    } else {
        confirmPasswordFeedback.textContent = 'Passwords do not match!';
        confirmPasswordFeedback.style.color = 'red';
    }
}

//Function to handle password field in real time
function handlePasswordField(event) {
    const password = passwordField.value;

    const conditions = [];
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    if (password.length < minLength) {
        conditions.push("Password must be at least " + minLength + " characters long.");
    }
    if (!hasUpperCase) {
        conditions.push("Password must contain at least one uppercase letter.");
    }
    if (!hasLowerCase) {
        conditions.push("Password must contain at least one lowercase letter.");
    }
    if (!hasNumber) {
        conditions.push("Password must contain at least one number.");
    }

    passwordFeedback.textContent = conditions;
}

// Function to handle username input field in realtime
function handleUsernameField(event) {
    const charCount = event.target.value; // grab input in real time
    const desiredLength = 8;

    if (charCount.trim() === "") {
        usernameFeedback.textContent = "Username cannot be empty"; // nothing to feeback
    } else if (charCount.length < desiredLength) {
        const remainCharLength = desiredLength - charCount.length;
        console.log(desiredLength);
        console.log(charCount);
        console.log(charCount.length);
        usernameFeedback.textContent = "Too short- " + remainCharLength + " more character(s) recommended";
    }
    else {
        usernameFeedback.textContent = "";
    }
}

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
    const password2 = document.getElementById("confirmPassword");
    const email = document.getElementById("email");
    const username = document.getElementById("username");


    // Call to further validate all inputs
    if
        (validateUsername(username.value) && validateEmail(email.value) && (validatePassword(password1.value, password2.value))) {
        alert("You have succesfully passed all input field checks! Well done!");
    }
    else {
        alert("Sorry, one or more of your inputs did not pass the secondary checks :(\n Please try again.");
    }
}

// Function to further validate username
function validateUsername(userName) {
    if (userName.length < 8) {
        alert("Please choose a username atleast 8 characters in length");
    }
    else
        return true;
}

// Function to further validate email
function validateEmail(userEmail) {
    // const emailString = userEmail;
    const dotCom = ".com";

    if (!userEmail.toLowerCase().includes(dotCom.toLowerCase())) {
        alert("Please verify your email address again.  It must end in '.com'");
    } else {
        return true;
    }
}

// Function to further validate username
function validatePassword(userPassword1, userPassword2) {

    if (userPassword1 !== userPassword2) {
        alert("Confirm password must match excatly.");
    }
    else {
        return true;
    }
}