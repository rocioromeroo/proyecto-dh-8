let nameInput = document.querySelector ("input[name=first_name] ")
let surnameInput = document.querySelector ("input[name=last_name] ")
let passwordInput = document.querySelector ("input[name=password] ")
let confirmationInput = document.querySelector ("input[name=repeat] ")
let usernameInput = document.querySelector ("input[name=username] ")
let imageInput = document.querySelector ("input[name=image] ")
let mensaje = document.querySelector (".mensaje")

function markValid (el){
    el.classList.remove("error")
    el.classList.add("success")
}

function markInvalid (el){
    el.classList.remove("success")
    el.classList.add("error")
}

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

function Checkfiles() { 
    var fup = document.querySelector ("input[name=image] "); 
    var fileName = fup.value; var ext = fileName.substring(fileName.lastIndexOf('.') + 1); 
    if(ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "PNG" || ext == "png"){
        mensaje.innerHTML="";
        return true;
    } 
    else{
        mensaje.innerHTML="Formato inválido";
        fup.focus();
        return false;
    }
}

imageInput.addEventListener("change", function(){
    Checkfiles(imageInput)
})
