allText = document.querySelectorAll('.light-purple')
allBtn = document.querySelectorAll('.hover-purple')
document.getElementById('themeBtn').onclick = e => {
	document.body.classList.toggle('bg-washed-yellow')
	document.body.classList.toggle('bg-navy')

	allText.forEach(el => {
		el.classList.toggle('light-purple')
		el.classList.toggle('washed-red')
	})

	allBtn.forEach(el => {
		el.classList.toggle('hover-purple')
		el.classList.toggle('hover-light-pink')
	})
}