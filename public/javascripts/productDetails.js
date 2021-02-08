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
})

