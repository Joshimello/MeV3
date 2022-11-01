// hide title & disable scroll
$('.title > *').css('visibility', 'hidden')
$('html, body').css({'overflow': 'hidden', 'height': '100%'})

// theme get & set
const themes = ['bright', 'pink', 'dark', 'vader']
themes.includes(Cookies.get('theme')) ? null : Cookies.set('theme', 'bright')
$('#themehref').attr('href', 'css/sakura-' + Cookies.get('theme') + '.css')
$('#theme').text(Cookies.get('theme'))
theme_i = themes.indexOf(Cookies.get('theme'))