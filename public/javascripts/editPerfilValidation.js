
let nameInput = document.querySelector ("input[name=first_name] ")
let surnameInput = document.querySelector ("input[name=last_name] ")
let passwordInput = document.querySelector ("input[name=password] ")
let confirmationInput = document.querySelector ("input[name=repeat] ")
let usernameInput = document.querySelector ("input[name=username] ")
let addressInput = document.querySelector ("input[name=address] ")

nameInput.addEventListener("keyup", function(){
    if (validator.isAlpha(nameInput.value) && validator.isLength(nameInput.value, {min:2, max:30}) || validator.isAlphanumeric(nameInput.value) && validator.isLength(nameInput.value, {min:2, max:30}) ) {
        nameInput.classList.remove("error")
        nameInput.classList.add("success")
    }
    else{
        nameInput.classList.remove("success")
        nameInput.classList.add("error")
    }
})

addressInput.addEventListener("keyup", function(){
    if (validator.isAlpha(addressInput.value) && validator.isLength(addressInput.value, {min:5, max:30}) ) {
        addressInput.classList.remove("error")
        addressInput.classList.add("success")
    }
    else{
        addressInput.classList.remove("success")
        addressInput.classList.add("error")
    }
})

surnameInput.addEventListener("keyup", function(){
    if (validator.isAlpha(surnameInput.value) && validator.isLength(surnameInput.value, {min:2, max:30}) ) {
        surnameInput.classList.remove("error")
        surnameInput.classList.add("success")
    }
    else{
        surnameInput.classList.remove("success")
        surnameInput.classList.add("error")
    }
})

usernameInput.addEventListener("keyup", function(){
    if (validator.isAlpha(usernameInput.value) && validator.isLength(usernameInput.value, {min:2, max:30}) || validator.isAlphanumeric(usernameInput.value) && validator.isLength(usernameInput.value, {min:2, max:30}) ) {
        usernameInput.classList.remove("error")
        usernameInput.classList.add("success")
    }
    else{
        usernameInput.classList.remove("success")
        usernameInput.classList.add("error")
    }
})

passwordInput.addEventListener("keyup", function(){
    if (validator.isLength(passwordInput.value, {min:8, max:20}) && /^[a-zA-Z]+\d{1}[a-zA-Z]+[\$\.\-\#\(\)\=\!\+]+[a-zA-Z]+$/.test (passwordInput.value)) {
        passwordInput.classList.remove("error")
        passwordInput.classList.add("success")
    }
    else{
        passwordInput.classList.remove("success")
        passwordInput.classList.add("error")
    }
})

confirmationInput.addEventListener("keyup", function(){
    if (validator.equals(confirmationInput.value, passwordInput.value)) {
        confirmationInput.classList.remove("error")
        confirmationInput.classList.add("success")
    }
    else{
        confirmationInput.classList.remove("success")
        confirmationInput.classList.add("error")
    }
})