let emailInput = document.querySelector ("input[name=email] ")
let passwordInput = document.querySelector ("input[name=password] ")


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

passwordInput.addEventListener("keyup", function(){
    if (validator.isLength(passwordInput.value, {min:8, max:20}) && /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[¿?¡!@#\$%\^&\*])(?=.{8,})/.test (passwordInput.value)) {
        markValid(passwordInput)
    }
    else{
        markInvalid(passwordInput)
    }
})

