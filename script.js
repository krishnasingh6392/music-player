const nextButton = document.getElementById("next-button");
const reverseButton = document.getElementById("reverse-button");
const song = document.getElementById("song");
const pauseNPlayButton = document.getElementById("pause-n-play-button");
const image = document.getElementById("image");
const songName = document.getElementById("song-name");
const singerName = document.getElementById("singer-name");

const singers = [
  "Akon",
  "Anne-Marie",
  "Charlie Puth",
  "Dua Lipa",
  "Jay Sean",
  "Michael Jackson",
  "One Direction",
];

const names = [
  "Right Now Now",
  "Rockabye",
  "Attention",
  "Levitating",
  "Ride It",
  "Dangerous",
  "Night Changes",
];

const songs = [
  "./audio/right now now.mp3",
  "./audio/rockabye.mp3",
  "./audio/attention.mp3",
  "./audio/levitating.mp3",
  "./audio/ride it.mp3",
  "./audio/dangerous.mp3",
  "./audio/night changes.mp3",
];

const images = [
  "./images/akon.jpeg",
  "./images/anne marie.jpg",
  "./images/charlie puth.jpeg",
  "./images/dua lipa.avif",
  "./images/jay sean.jpg",
  "./images/michael-jackson.jpg",
  "./images/one direction.jpg",
];

let index = 0;

nextButton.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  song.src = songs[index];
  image.src = images[index];
  songName.textContent = names[index];
  singerName.textContent = singers[index];
  song.play();
  pauseNPlayButton.classList.replace(
    "ri-play-circle-fill",
    "ri-pause-circle-fill"
  );
});

pauseNPlayButton.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    pauseNPlayButton.classList.replace(
      "ri-play-circle-fill",
      "ri-pause-circle-fill"
    );
  } else {
    song.pause();
    pauseNPlayButton.classList.replace(
      "ri-pause-circle-fill",
      "ri-play-circle-fill"
    );
  }
});

reverseButton.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  song.src = songs[index];
  image.src = images[index];
  songName.textContent = names[index];
  singerName.textContent = singers[index];
  song.play();
  pauseNPlayButton.classList.replace(
    "ri-play-circle-fill",
    "ri-pause-circle-fill"
  );
});

// Auto-play next song when current one ends
song.addEventListener("ended", () => {
  nextButton.click();
});
