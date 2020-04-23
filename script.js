const musicMain = document.getElementById("music_main");
const playButton = document.getElementById("playbutton");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressMain = document.getElementById("progress_main");
const title = document.getElementById("title");
const cover = document.getElementById("music_image");
const music = ["hey", "summer", "ukulele"];
let musicIndex = 2;
loadMusic(music[musicIndex]);
function loadMusic(music) {
  title.innerText = music;
  audio.src = `music/${music}.mp3`;
  cover.src = `image/${music}.png`;
}
function playMusic() {
  musicMain.classList.add("play");
  playButton.querySelector("i.fa").classList.remove("fa-play");
  playButton.querySelector("i.fa").classList.add("fa-pause");
  audio.play();
}
function pauseMusic() {
  musicMain.classList.remove("play");
  playButton.querySelector("i.fa").classList.add("fa-play");
  playButton.querySelector("i.fa").classList.remove("fa-pause");
  audio.pause();
}
function previousMusic() {
  musicIndex--;
  if (musicIndex < 0) {
    musicIndex = music.length - 1;
  }
  loadMusic(music[musicIndex]);
  playMusic();
}
function nextMusic() {
  musicIndex++;
  if (musicIndex > music.length - 2) {
    musicIndex = 0;
  }
  loadMusic(music[musicIndex]);
  playMusic();
}
playButton.addEventListener("click", () => {
  const isPlaying = musicMain.classList.contains("play");
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});
previousButton.addEventListener("click", previousMusic);
nextButton.addEventListener("click", nextMusic);
