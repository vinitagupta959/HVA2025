let formContainer = document.getElementById("registerForm");
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let confirmPasswordInput = document.getElementById("confirmPasswordInput");
let button = document.getElementById("submitBtn");
let summarySection = document.getElementById("summarySection");
nameInput.addEventListener('blur', function () {
    const nameVal = nameInput.value.trim();
    if (!nameVal) {
        if (nameInput.nextElementSibling) {
            nameInput.nextElementSibling.innerText = "Name is required.";
        }
    } else {
        if (nameInput.nextElementSibling) {
            nameInput.nextElementSibling.innerText = "";
        }
    }
});
nameInput.addEventListener('input', function () {
    if (nameInput.nextElementSibling) nameInput.nextElementSibling.innerText = "";
});

formContainer.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let isValid = true;
    summarySection.innerText = "";
    if (nameInput.value.trim() === "") {
        if (nameInput.nextElementSibling) {
            console.log(nameInput.nextElementSibling)
            nameInput.nextElementSibling.innerText = "Name is not valid.";
        }
        isValid = false
    } else {
        name = nameInput.value.trim();
        if (nameInput.nextElementSibling) {
            nameInput.nextElementSibling.innerText = "";
        }
    }

    if ((!emailInput.value) || (!emailInput.value.includes("@"))) {
        if (emailInput.nextElementSibling) {
            console.log("ybhj");

            emailInput.nextElementSibling.innerText = "Email is not valid.";
        }
        isValid = false
    } else {
        if (emailInput.nextElementSibling) {
            emailInput.nextElementSibling.innerText = "";
        }
        email = emailInput.value;
    }
    if ((!passwordInput.value) || (passwordInput.value !== confirmPasswordInput.value)) {
        if (confirmPasswordInput.nextElementSibling) {
            confirmPasswordInput.nextElementSibling.innerText = "Passwords do not match.";
        }
        isValid = false
    } else {
        password = passwordInput.value;
        if (confirmPasswordInput.nextElementSibling) {
            confirmPasswordInput.nextElementSibling.innerText = "";
        }
    }
    if (!isValid) {
        return
    } else {
        summarySection.innerText = `name:${name}, email: ${email}, Password:${password}`
    }


})

