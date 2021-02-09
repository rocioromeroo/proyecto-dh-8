let second = 0
let images = Array.from(document.querySelectorAll(".image"))

function switchImage(name){
     images.forEach(image =>{
      console.log(images)
           if(image.classList.contains(name)){
                 console.log(name)
                 image.classList.replace("hidden", "visible")
           }
           else{ image.classList.replace("visible", "hidden")}
           
     })
}
setInterval(function () {
      if (second >= 0 && second <= 9){
            switchImage("img_1")
      }
      if (second >= 10 && second <= 14){
            switchImage("img_2")
      }
      if (second >= 15 && second <= 25){
            switchImage("img_3")
      }
      if (second == 20){
            second = 0
      } else {
            second++
      }

}, 1000)

