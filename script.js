console.log("Welcome to myyyyyyy Spotify");

// Initialize the Variables
let songIndex = 1;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
  {songname: "Lonely",filePath:"1.mp3",coverpath:"cover.jpeg"},
  {songname: "SMACK THAT", filePath:"2.mp3",coverpath:"cover2.jpg"},
     {songname: "Beautiful", filePath:"3.mp3",coverpath:"cover.jpeg"},
  {songname: "Don't matter ",filePath:"4.mp3",coverpath:"cover2.jpg"},
    {songname: "picky",filePath:"5.mp3",coverpath:"cover.jpeg"},
    {songname: "LonelyI WANNA LOVE U",filePath:"6.mp3",coverpath:"cover2.jpg"},
  {songname: "PLAY HARD",filePath:"7.mp3",coverpath:"cover2.jpg"},
  {songname: "RIGHT NOW",filePath:"8.mp3",coverpath:"cover.jpeg"},
    {songname: "SORRY",filePath:"9.mp3",coverpath:"cover2.jpg"},
  {songname: "CHAMAKCHALLO",filePath:"10.mp3",coverpath:"cover.jpeg"},]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
})
 

// PLAY AND PAUSE 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update PROGRESS BAR
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})