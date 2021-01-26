let nameInput = document.querySelector ("input[name=name] ")
let descriptionInput = document.querySelector ("textarea[name=description] ")  
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

descriptionInput.addEventListener ("keyup", function(){
    if (validator.isLength(descriptionInput.value, {min:1, max:20})){
        descriptionInput.classList.remove("error-tex")
        descriptionInput.classList.add("success-tex")
    }
    else{
        descriptionInput.classList.remove("success-tex")
        descriptionInput.classList.add("error-tex")        
    }
})


