function showGreeting() {
    var greetingElement = document.getElementById("greeting");
    if (!greetingElement) {
        return;
    }

    var now = new Date();
    var hour = now.getHours();
    var greetingText = "Welcome!";

    if (hour < 12) {
        greetingText = "Good morning! Ready to explore cloud computing?";
    } else if (hour < 18) {
        greetingText = "Good afternoon! Keep learning about the cloud.";
    } else {
        greetingText = "Good evening! Cloud learning can happen anytime.";
    }

    greetingElement.textContent = greetingText;
}

function validateContactForm() {
    var nameField = document.getElementById("name");
    var emailField = document.getElementById("email");

    if (!nameField.value.trim()) {
        alert("Please enter your name.");
        nameField.focus();
        return false;
    }

    if (!emailField.value.trim()) {
        alert("Please enter your email address.");
        emailField.focus();
        return false;
    }

    alert("Thank you! Your message has been received.");
    return true;
}

document.addEventListener("DOMContentLoaded", showGreeting);