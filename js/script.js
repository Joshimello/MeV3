// hide title & disable scroll
$('.title > *').css('visibility', 'hidden')
$('html, body').css({'overflow': 'hidden', 'height': '100%'})

// theme get & set
const themes = ['bright', 'pink', 'dark', 'vader']
themes.includes(Cookies.get('theme')) ? null : Cookies.set('theme', 'bright')
$('#themehref').attr('href', 'css/sakura-' + Cookies.get('theme') + '.css')
$('#theme').text(Cookies.get('theme'))
theme_i = themes.indexOf(Cookies.get('theme'))

$(window).on('load', () => {

	// preloader
	$('html, body').css({'overflow': 'auto', 'height': 'auto'})
	$('.preloader').fadeOut('fast')

	// entry animation
	for (const [key, value] of Object.entries({ '.a': '0', '.b': '500', '.c': '1000' })) {
		ScrollReveal().reveal('.title ' + key, {
			distance: '0.2rem',
			duration: '1000',
			scale: 0.75,
			delay: value
		})
	}

	for (const [key, value] of Object.entries({ 'h3': '1', 'h6': '0', 'img': '0' })) {
		ScrollReveal().reveal('.title ' + key, {
			distance: '0.5rem',
			duration: '1000',
			opacity: value,
			delay: '2000',
		})
	}
	
	ScrollReveal().reveal('h2', {
		distance: '0.5rem',
		duration: '1000'
	})

	// title text rotation
	$('#title-text').teletype({
	    text: [
		    'Web Development',
		    'Video Editing',
		    'Game Modding',
		    'Building PCs',
		    'Positive Vibes :3'
		],
	    typeDelay: -50,
	    backDelay: -50,
	   	delay: 1000
	})

	// nav reveal & hide
	$('.fa-plus').click(() => {
		$('.nav').css("display", "flex").hide().fadeIn('fast')
	})

	$('.fa-times').click(function(){
		$('.nav').fadeOut('fast')
	})

	$( window ).resize(() => {
		if ($( window ).width() > 51 * (parseFloat($("body").css("font-size")) - 2.5)) {
			$('.nav').css('display') == 'none' ? $('.nav').css('display', 'flex') : null
		}
	})

	// theme change
	$('#theme').click(() => {
		theme_i++
		theme_i > themes.length - 1 ? theme_i = 0 : null
		$('#themehref').attr('href', 'css/sakura-' + themes[theme_i] + '.css')
		$('#theme').text(themes[theme_i])
		Cookies.set('theme', themes[theme_i])
	})

	// language change
	langs = ['eng', 'chi', 'jap', 'uwu']
	lang_i = 0
	$('#lang').click(() => {
		lang_i++
		lang_i > langs.length - 1 ? lang_i = 0 : null
		$('#lang').text(langs[lang_i])
	})

})