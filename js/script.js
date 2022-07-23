// title text rotation
const words = [
    'Web Development',
    'Video Editing',
    'Game Modding',
    'Building PCs',
    'Positive Vibes :D'
]

$(window).on('load', () => {
    $('#title-text').teletype({
        text: words,
        typeDelay: -50,
        backDelay: -50,
       	delay: 1000
    })
})