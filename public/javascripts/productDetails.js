window.addEventListener("load", function () {
    let display = document.getElementById('display')
	display.innerHTML = '1'
	
	document.getElementById('btn-more').addEventListener('click', function () {
		if(display.innerHTML < 100) {
			display.innerHTML++
		}
	}) 
	
	document.getElementById('btn-less').addEventListener('click', function() {
		if(display.innerHTML > 1) {
			display.innerHTML--
		}
	})

    function active(el) {
        el.classList.remove('active')
        el.classList.add('desactive')
    }

    function desactive(el) {
        el.classList.remove('desactive')
        el.classList.add('active')
    }

    let infoClic = true
    let mostrarInfo = document.getElementById('info')
    mostrarInfo.addEventListener('click', function () {
        
        if(infoClic) {
            active(mostrarInfo.childNodes[3].childNodes[1])
            infoClic = false
        } else {
            desactive(mostrarInfo.childNodes[3].childNodes[1])
            infoClic = true
        }
        
    })

    let caraClic = true
    let mostrarCara = document.getElementById('cara')
    mostrarCara.addEventListener('click', function () {
        if(caraClic) {
            desactive(mostrarCara.childNodes[3])
            caraClic = false
        } else {
            active(mostrarCara.childNodes[3])
            caraClic = true
        }
        
    })

    let servClic = true
    let mostrarServ = document.getElementById('serv')
    mostrarServ.addEventListener('click', function () {
        if(servClic) {
            desactive(mostrarServ.childNodes[3].childNodes[1])
            servClic = false
        } else {
            active(mostrarServ.childNodes[3].childNodes[1])
            servClic = true

        }
        
    })

    let garaClic = true
    let mostrarGara = document.getElementById('gara')
    mostrarGara.addEventListener('click', function () {
        if(garaClic) {
            desactive(mostrarGara.childNodes[3])
            garaClic = false
        } else {
            active(mostrarGara.childNodes[3])
            garaClic = true
        }
        
    })
    
})

