$(window).on('load', () => {

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

})