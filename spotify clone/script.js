console.log("Welcome to spotify");

//intialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif')
let songs = [
    {songname: "salam-e-ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpeg"},
    {songname: 'bhula dena', filePath: 'songs/1.mp3', coverPath: "covers/1.jpeg"}
]
//audioElement.play()

//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause()
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

//listen to events
audioElement.addEventListener("timeupdate", ()=>{
    console.log("timeupdate");
    //update seekbar
    progress = parseInt(((audioElement.currentTime/audioElement.duration)*100));
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})