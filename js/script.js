// title text rotation

$(window).on('load', () => {
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

	ScrollReveal().reveal('.title .a', {
		distance: '0.2rem',
		duration: '1000',
		scale: 0.75
	})

	ScrollReveal().reveal('.title .b', {
		distance: '0.2rem',
		duration: '1000',
		scale: 0.75,
		delay: '500',
	})

	ScrollReveal().reveal('.title .c', {
		distance: '0.2rem',
		duration: '1000',
		scale: 0.75,
		delay: '1000',
	})

	ScrollReveal().reveal('.title h3', {
		distance: '0.5rem',
		duration: '1000',
		opacity: 1,
		delay: '2000',
	})

	ScrollReveal().reveal('.title h6', {
		distance: '0.5rem',
		duration: '1000',
		delay: '2000'
	})

	ScrollReveal().reveal('.title img', {
		distance: '0.5rem',
		duration: '1000',
		delay: '2000'
	})

})