$(document).ready(() => {
    function playAudio( path) {
        const audio = document.createElement("audio")
        audio.src = path
        audio.play()
    }

    playAudio("/sound/claus_ho_ho_ho.wav")
    playAudio("/sound/magic.wav")
    playAudio("/sound/magic2.wav")

    
})