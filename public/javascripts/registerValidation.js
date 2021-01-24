let emailInput = document.getElementById ("email")
let nameInput = document.getElementById ("first_name")
let surnameInput = document.getElementById ("last_name")
let passwordInput = document.getElementById ("password")
let confirmationInput = document.getElementById ("password_confirmation")

emailInput.addEventListener("keyup", function(){
    if (validator.isEmail(emailInput.value)) {
        emailInput.classList.remove("error")
        emailInput.classList.add("success")
    }
    else{
        emailInput.classList.remove("success")
        emailInput.classList.add("error")
    }
})

nameInput.addEventListener("keyup", function(){
    if (validator.isAlpha(nameInput.value) && isLength(nameInput.value, {min:2, max:30}) ) {
        nameInput.classList.remove("error")
        nameInput.classList.add("success")
    }
    else{
        nameInput.classList.remove("success")
        nameInput.classList.add("error")
    }
})

surnameInput.addEventListener("keyup", function(){
    if (validator.isAlpha(nameInput.value) && isLength(surnameInput.value, {min:2, max:30}) ) {
        surnameInput.classList.remove("error")
        surnameInput.classList.add("success")
    }
    else{
        surnameInput.classList.remove("success")
        surnameInput.classList.add("error")
    }
})

passwordInput.addEventListener("keyup", function(){
    if (validator.isLength(passwordInput.value, {min:8, max:20}) && /^[A-Z]+\d{1}[A-Z]+[\$\.\-\#\(\)\=\!\+]+[A-Z]+$/.test (passwordInput.value)) {
        passwordInput.classList.remove("error")
        passwordInput.classList.add("success")
    }
    else{
        passwordInput.classList.remove("success")
        passwordInput.classList.add("error")
    }
})

confirmationInput.addEventListener("keyup", function(){
    if (validator.equals(confirmationInput.value, passwordInput)) {
        confirmationInput.classList.remove("error")
        confirmationInput.classList.add("success")
    }
    else{
        confirmationInput.classList.remove("success")
        confirmationInput.classList.add("error")
    }
})

