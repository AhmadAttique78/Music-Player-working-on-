const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


//songs titles
const songs = ['cheapthrills1', 'peeloon2', 'phrkabhi3', 'sochnaske4', 'tubnjagalibanaraski']


//keep track of songs
let songIndex = 2

//update sond details
function loadSong(song) {
    title.innerHTML = song;
    // audio.src = `music/${song}.mp3`
    audio.src = "music/" + song + ".mp3";
    cover.src = `images/${song}.jpg`
}

console.log('./music./');


//initially load song info DOM
loadSong(songs[songIndex]);

// console.log(songs[1]);


