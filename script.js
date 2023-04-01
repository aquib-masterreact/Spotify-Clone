console.log("welcome to javascript");

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressiveBar');
let gif = document.getElementById('gif');
let  next = document.getElementById('next');


let songs = [
    {songName: "Let Me Love U",filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Salam-e-Ishq",filePath:"2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Salam-e",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Salam-e-Ishq",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "am-e-Is",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "Ishq",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "shq",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    
]


masterPlay.addEventListener('click',() => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
} )
