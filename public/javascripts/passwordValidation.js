let passwordInput = document.querySelector ("input[name=password]")
let confirmationInput = document.querySelector ("input[name=repeat]")

console.log("hoola")

function markValid (el){
    el.classList.remove("error")
    el.classList.add("success")
}

function markInvalid (el){
    el.classList.remove("success")
    el.classList.add("error")
}

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