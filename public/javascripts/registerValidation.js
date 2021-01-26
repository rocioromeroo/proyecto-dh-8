let emailInput = document.querySelector ("input[name=email] ")
let nameInput = document.querySelector ("input[name=first_name] ")
let surnameInput = document.querySelector ("input[name=last_name] ")
let passwordInput = document.querySelector ("input[name=password] ")
let confirmationInput = document.querySelector ("input[name=password_confirmation] ")


function markValid (el){
    el.classList.remove("error")
    el.classList.add("success")
}

function markInvalid (el){
    el.classList.remove("success")
    el.classList.add("error")
}

emailInput.addEventListener("keyup", function(){
    if (validator.isEmail(emailInput.value)) {
        markValid(emailInput)
    }
    else{
        markInvalid(emailInput)
    }
})

nameInput.addEventListener("keyup", function(){
    if (validator.isAlpha(nameInput.value) && validator.isLength(nameInput.value, {min:2, max:30}) ) {
        markValid(nameInput)
    }
    else{
        markInvalid(nameInput)
    }
})

surnameInput.addEventListener("keyup", function(){
    if (validator.isAlpha(nameInput.value) && validator.isLength(surnameInput.value, {min:2, max:30}) ) {
        markValid(surnameInput)
    }
    else{
        markInvalid(surnameInput)
    }
})

passwordInput.addEventListener("keyup", function(){
    if (validator.isLength(passwordInput.value, {min:8, max:20}) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[¿?¡!@#\$%\^&\*])(?=.{8,})/.test (passwordInput.value)) {
        markValid(passwordInput)
    }
    else{
        markInvalid(passwordInput)
    }
})

confirmationInput.addEventListener("keyup", function(){
    if (validator.equals(confirmationInput.value, passwordInput.value)) {
        markValid(confirmationInput)
    }
    else{
        markInvalid(confirmationInput)
    }
})

console.log(validator)