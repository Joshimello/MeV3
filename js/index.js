// THEME CHANGE
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

// AGE
setInterval(() => {
    age = ((new Date() / 100000 - 10942272) / 315360)
    document.getElementById('age').innerHTML = String(age).slice(0, 12)
}, 50)

// LANGUAGE CHANGE