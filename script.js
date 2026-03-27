// Get form element nodes
const form = document.getElementById("registrationForm");
const password = document.getElementById("password");
console.log(password.value);
const email = document.getElementById ("email");
console.log(email.value);
const username = document.getElementById("username");
console.log(username.value);add .

// Add eventlistener on Submit
form.addEventListener("submit", handleSubmit);

// Function to handle form submission
function handleSubmit(event){
event.preventDefault(); // prevent automatic refresh

 if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
   
    validateUsername(username);
    validatePassword(password1, password2);
    validateEmail(email);
}

