console.log("welcome to frequency");
let songindex =0;
let audioElement = new Audio('song/1.mp3');
let masterplay =  document.getElementById('masterplay');
let myprogress = document.getElementById('myprogress');
let gif = document.getElementById('gif');
let info = document.getElementById('info');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs =[
    {songname: "BLACKPINK-Pink-Venom-", filepath:"song/1.mp3", coverpath:"cover/1.png"},
    {songname: "Ariana Grande - Positions", filepath:"song/2.mp3", coverpath:"cover/2.png"},
    {songname: "Dark Horse - Katy Perry", filepath:"song/3.mp3", coverpath:"cover/3.png"},
    {songname: "Dont Let Me Down - Chainsmokers", filepath:"song/4.mp3", coverpath:"cover/4.png"},
    {songname: "Imagine Dragons - Thunder", filepath:"song/5.mp3", coverpath:"cover/5.png"},
    {songname: "Justin Bieber - Sorry", filepath:"song/6.mp3", coverpath:"cover/6.png"},
    {songname: "Perfect - Ed Sheeran", filepath:"song/7.mp3", coverpath:"cover/7.png"},
    {songname: "Shake It Off", filepath:"song/8.mp3", coverpath:"cover/8.jpg"},
    {songname: "Shape Of You", filepath:"song/9.mp3", coverpath:"cover/9.png"},
    {songname: "Taylor Swift - Bad Blood", filepath:"song/10.mp3", coverpath:"cover/10.jpg"},
]
songitem.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src= songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText= songs[i].songname;
})

masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity= 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogress.value = progress;
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime = (myprogress.value * audioElement.duration) /100;
})

const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeallplay();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songindex +1}.mp3`;
        info.innerText = songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

    })

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -=1;
    }
    audioElement.src = `song/${songindex +1}.mp3`;
    info.innerText = songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
   

})
document.getElementById('forward').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex +=1;
    }
    
    audioElement.src = `song/${songindex +1}.mp3`;
    info.innerText = songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})