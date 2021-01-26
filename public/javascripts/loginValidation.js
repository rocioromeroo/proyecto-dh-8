let emailInput = document.querySelector ("input[name=email] ")
let passwordInput = document.querySelector ("input[name=password] ")

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

passwordInput.addEventListener("keyup", function(){
    if (validator.isLength(passwordInput.value, {min:8, max:20})) {
        passwordInput.classList.remove("error")
        passwordInput.classList.add("success")
    }
    else{
        passwordInput.classList.remove("success")
        passwordInput.classList.add("error")
    }
})
