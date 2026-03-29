User Registration Form 

Overview
This project is an interactive user registration form built using HTML, CSS, and JavaScript. It demonstrates the use of DOM manipulation, event handling, HTML5 validation, JavaScript-based validation, real-time user feedback, and localStorage for simple data persistence.

The form validates user input dynamically as the user types and also performs a final validation upon submission. If all inputs pass validation, the username and email are stored in the browser’s localStorage and automatically repopulated when the page reloads.

Features
Real-time validation for:
Username
Password
Confirm Password
HTML5 form validation using built-in attributes
Custom JavaScript validation logic
Immediate feedback messages for user guidance
Data persistence using localStorage
Automatic repopulation of stored user data on page reload

Reflection Questions
1.How did event.preventDefault() help in handling form submission?
event.preventDefault() was used inside the form submission handler to stop the browser’s default behavior of refreshing or reloading the page when the form is submitted. This allowed the application to:
Run custom validation logic first
Display alerts or feedback without interruption
Control when and how the form data is processed
Store validated data in localStorage before any page reload occurs
Without preventDefault(), the page would refresh immediately, preventing validation checks and data storage from completing properly.

2.What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 validation attributes (such as required, type="email", minlength) provide built-in, declarative validation enforced by the browser. They are simple to implement and provide immediate feedback without writing additional code.
JavaScript-based validation, on the other hand, allows for more complex, customized, and dynamic validation logic (e.g., password strength checks, cross-field validation like confirming passwords, or custom username rules).
Using both together provides:
A baseline of validation handled automatically by the browser (HTML5)
Enhanced, custom validation rules handled via JavaScript
A better user experience with more detailed and contextual feedback

3.Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
After successful validation, the username and email are stored as an object, converted into a JSON string using JSON.stringify(), and saved in localStorage using a key (e.g., "user").
When the page loads, the data is retrieved using localStorage."getItem()", parsed back into an object using JSON.parse(), and then used to pre-fill the form fields.
Limitations of localStorage:
 Data is stored in plain text and is not encrypted
 Accessible via JavaScript, making it vulnerable to XSS attacks
 Limited storage capacity (typically around 5MB)
 Not suitable for storing sensitive data such as passwords or personal identifiable information
 Data persists indefinitely until manually cleared

4.Describe a challenge you faced in implementing the real-time validation and how you solved it.
One challenge was ensuring that the real-time validation behaved correctly as the user typed, especially for the username and password fields. Initially, issues arose due to incorrect conditional logic and misunderstandings around how input values update dynamically.
For example, validation conditions were incorrectly structured, and there were cases where feedback messages did not update as expected. This was resolved by:
Properly using the "input" event listener to capture real-time changes
Accessing the current value using event.target.value
Correcting logical conditions such as checking string length and trimming whitespace using .trim()
Ensuring validation messages were updated or cleared appropriately based on input state
Additionally, debugging helped identify issues such as incorrect variable references and syntax errors that prevented the script from executing properly.

5.How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
Custom error messages were designed to:
Appear only when the user begins typing
Provide clear and specific guidance on what needs to be corrected
Disappear when the input meets validation requirements
This was achieved by:
Using "input" event listeners to trigger validation in real time
Checking conditions such as input length, whitespace, and format
Updating the DOM elements (e.g., in the span error fields) with descriptive messages
Clearing messages when inputs become valid
Using conditional logic to avoid overwhelming the user with messages when fields are empty
This approach ensures that feedback is contextual, non-intrusive, and helpful, improving the overall user experience.

Conclusion
This lab demonstrates how to combine native HTML validation with JavaScript to build a responsive and user-friendly registration form. By incorporating real-time validation and persistent storage, the application provides immediate feedback while maintaining user data across sessions.