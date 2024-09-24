// Wait for the DOM to load
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.querySelector("form"); // Select the form
        const username = document.getElementById("username"); // Get the username input
        const password = document.getElementById("password"); // Get the password input
        const submit = document.getElementById("submit"); // Get the login button
    
        // Prevent the form from submitting by default
        form.onsubmit = (event) => {
            event.preventDefault();
    
            // Get the values of the inputs
            const usernameValue = username.value;
            const passwordValue = password.value;
    
            // Validate the username and password
            if (usernameValue.includes("@") && passwordValue.length >=7) {
                // If valid, simulate a successful login
                document.write("submit");
                // Redirect to another page (replace 'home.html' with your desired page)
                window.location.href = "webpage.html"; // Change this to your actual login redirect
            } else {
                // Show error messages
                if (!usernameValue.includes("@")) {
                    alert("Enter Valid email ");
                }
                if (passwordValue.length <=7 ) {
                    alert("Invalid password");
                }
            }
        };
    
        // Optional: Add click event to the button if you want
        loginBtn.onclick = () => {
            form.dispatchEvent(new Event('submit')); // Manually trigger form submission
        };
    });