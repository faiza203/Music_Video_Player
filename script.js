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
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
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
  cover.style.animationPlayState = "running";
}
function pauseMusic() {
  musicMain.classList.remove("play");
  playButton.querySelector("i.fa").classList.add("fa-play");
  playButton.querySelector("i.fa").classList.remove("fa-pause");
  audio.pause();
  cover.style.animationPlayState = "paused";
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
  if (musicIndex > music.length - 1) {
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
audio.addEventListener("timeupdate", updateProgress);
progressMain.addEventListener("click", setProgress);
audio.addEventListener("ended", nextMusic);
