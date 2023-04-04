console.log("Welcome to spotify");
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"What makes you beautiful",filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"He Sharadhe",filePath:"songs/2.mp3", coverPath:"covers/2.jpeg"},
    {songName:"LaliJoo",filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Sojugadha sooju mallige",filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Singara siriye",filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Apna bana le piya",filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Friends",filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Karma song",filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
]
let songsName = (document.getElementById('songsName'));
songItems.forEach((element,i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songsName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})


//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100);
})




document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songsName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    songsName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})