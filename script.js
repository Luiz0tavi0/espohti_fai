musical_artist = [
  {
    name: "Pixies",
    songs: [
      {
        id: "M1BGY0hQd2pXY2JNVUo2RjgxWnYrZHBWQk93WWgxNUU3N3JwbEd0WHo5R2pMZWJTdzU1ODhjc2xyZ2E2MlRkRzNCZW5jdkhvdVZ2SVpFOUdtclNub2JNMEJFd3Q0TUVva3BtMVF4T3NYNDQ9",
        image: "https://i.ytimg.com/vi/N3oCS85HvpY/hqdefault.jpg",
        name: "Where Is My Mind?",
        song_url:
          "https://fine.sunproxy.net/file/M1BGY0hQd2pXY2JNVUo2RjgxWnYrZHBWQk93WWgxNUU3N3JwbEd0WHo5R2pMZWJTdzU1ODhjc2xyZ2E2MlRkRzNCZW5jdkhvdVZ2SVpFOUdtclNub2JNMEJFd3Q0TUVva3BtMVF4T3NYNDQ9/pixies_-_where_is_my_mind_(BornMP3.com).mp3",
        liked: false,
      },
      {
        id: "M1BGY0hQd2pXY2JNVUo2RjgxWnYrZHBWQk93WWgxNUU3N3JwbEd0WHo5R2pMZWJTdzU1ODhjc2xyZ2E2MlRkRzNCZW5jdkhvdVZ2SVpFOUdtclNub2JNMEJFd3Q0TUVva3BtMVF4T3NYNDQ9",
        image:
          "https://slm-assets.secondlife.com/assets/23208107/view_large/a2831341449_16.jpg",
        name: "Here Comes Your Man",
        song_url:
          "https://fine.sunproxy.net/file/M1BGY0hQd2pXY2JNVUo2RjgxWnYrZHBWQk93WWgxNUU3N3JwbEd0WHo5R2pMZWJTdzU1ODhjc2xyZ2E2MlRkR1J4NU13UVhpV1dmRVdjYkNKRkh0T0I0bnRZOHd3VVgzcnpQTVJHVXhZaXM9/Pixies_-_Here_Comes_Your_Man_(BornMP3.com).mp3",
        liked: false,
      },
      {
        id: "V2VtRDZvenZxOEhDRXVwa081aEFLczBCbmRYSHY2WUFBZmVmdCt2TEF4d1BmbC9WaWwzZGwyekV6Y1I3ZlVxaG5wZGYwUjFIWFczR285Q2d0d2xXSU10WjZWVVF4N0tjN1RBanp2c0NmYk09",
        image:
          "https://slm-assets.secondlife.com/assets/23208107/view_large/a2831341449_16.jpg",
        name: "Hey",
        song_url:
          "https://fine.sunproxy.net/file/V2VtRDZvenZxOEhDRXVwa081aEFLczBCbmRYSHY2WUFBZmVmdCt2TEF4d1BmbC9WaWwzZGwyekV6Y1I3ZlVxaG5wZGYwUjFIWFczR285Q2d0d2xXSU10WjZWVVF4N0tjN1RBanp2c0NmYk09/Pixies_-_Hey_(ColdMP3.com).mp3",
        liked: false,
      },

      {
        id: "V2VtRDZvenZxOEhDRXVwa081aEFLczBCbmRYSHY2WUFBZmVmdCt2TEF4d1BmbC9WaWwzZGwyekV6Y1I3ZlVxaHdvMEJmMm03VHhlRHR4ZTlZYVp5aFM0R3lRV2dNdFk4NHJJNVN4alJ4WEE9",
        image:
          "https://slm-assets.secondlife.com/assets/23208107/view_large/a2831341449_16.jpg",
        name: "Monkey Gone to Heaven",
        song_url:
          "https://fine.sunproxy.net/file/V2VtRDZvenZxOEhDRXVwa081aEFLczBCbmRYSHY2WUFBZmVmdCt2TEF4d1BmbC9WaWwzZGwyekV6Y1I3ZlVxaHdvMEJmMm03VHhlRHR4ZTlZYVp5aFM0R3lRV2dNdFk4NHJJNVN4alJ4WEE9/pixies_-_monkey_gone_to_heaven_(ColdMP3.com).mp3",
        liked: false,
      },

      {
        id: "V2VtRDZvenZxOEhDRXVwa081aEFLczBCbmRYSHY2WUFBZmVmdCt2TEF4d1BmbC9WaWwzZGwyekV6Y1I3ZlVxaHdvMEJmMm03VHhlRHR4ZTlZYVp5aFM0R3lRV2dNdFk4NHJJNVN4alJ4WEE9",
        image:
          "https://slm-assets.secondlife.com/assets/23208107/view_large/a2831341449_16.jpg",
        name: "Debaser",
        song_url:
          "https://dc607.4shared.com/img/e20ldJkjda/790424a8/dlink__2Fdownload_2Fe20ldJkjda_2FPixies_5F-_5FDebaser_5F_5F1_5F.mp3_3Fsbsr_3Dd96366724522026166d4f4e8c32a21e0ad7_26bip_3DMTc3LjE0OC4xNDMuMTY2_26lgfp_3D52_26bip_3DMTc3LjE0OC4xNDMuMTY2/preview.mp3",
        liked: false,
      },
    ],
  },
];
musical_artist_index = 0;
index = 0;

const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const likeButton = document.getElementById("like");
const previous = document.getElementById("previous");
const currentProgress = document.getElementById("current-progress");
const progressContainer = document.getElementById("progress-container");
const shuflleButton = document.getElementById("shuffle");
const repeatButton = document.getElementById("repeat");
const songTime = document.getElementById("song-time");
const totalTime = document.getElementById("total-time");

let isShuffled = false;
let repeatOn = false;
let sortedPlayList = [...musical_artist[0].songs];

function playSong() {
  play.querySelector(".bi").classList.remove("bi-play-circle-fill");
  play.querySelector(".bi").classList.add("bi-pause-circle-fill");

  song.play();
}

function pauseSong() {
  play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
  play.querySelector(".bi").classList.add("bi-play-circle-fill");
  song.pause();
}

function playPauseDecider() {
  if (song.paused !== true) pauseSong();
  else playSong();
}
function likeButtonRender() {
  if (sortedPlayList[index].liked === true) {
    likeButton.querySelector(".bi").classList.remove("bi-heart");
    likeButton.querySelector(".bi").classList.add("bi-heart-fill");
    likeButton.classList.add("button-active");
  } else {
    likeButton.querySelector(".bi").classList.add("bi-heart");
    likeButton.querySelector(".bi").classList.remove("bi-heart-fill");
    likeButton.classList.remove("button-active");
  }
}

function preInitialize() {
  if (!song.paused) {
    song.pause();
  }
  cover.src = sortedPlayList[index].image;
  song.setAttribute("src", sortedPlayList[index].song_url);
  song.load();
}

function initializeSong() {
  // cover.src = sortedPlayList[index].image;
  // song.src = sortedPlayList[index].song_url;
  // song.load();
  songName.innerText = sortedPlayList[index].name;
  bandName.innerText = musical_artist[musical_artist_index].name;
  likeButtonRender();
}

function previousSong() {
  if (index === 0) {
    index = sortedPlayList.length - 1;
  } else {
    index -= 1;
  }
  preInitialize();
  playPauseDecider();
}
function nextSong() {
  if (index === sortedPlayList.length - 1) {
    index = 0;
  } else {
    index += 1;
  }
  preInitialize();
  playPauseDecider();
}
function updateProgress() {
  const barWidth = (song.currentTime / song.duration) * 100;
  currentProgress.style.setProperty("--progress", `${barWidth}%`);
  songTime.innerText = toHHMMSS(song.currentTime);
}

function jumpTo(event) {
  const width = progressContainer.clientWidth;
  const clickPosition = event.offsetX;
  const jumpToTime = (clickPosition / width) * song.duration;
  song.currentTime = jumpToTime;
}

function shuflleArray(preShuflleArray) {
  let size = preShuflleArray.length;
  let currentIndex = size;
  let aux;
  let randomIndex;
  while (--currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * size);
    aux = preShuflleArray[currentIndex];
    preShuflleArray[currentIndex] = preShuflleArray[randomIndex];
    preShuflleArray[randomIndex] = aux;
  }
}

function shuffleButtonClicked() {
  if (isShuffled === false) {
    shuflleArray(sortedPlayList);
    // sortedPlayList.forEach((element) => {
    //   console.log(`Aleatório: ${element.name}`);
    // });
  } else {
    sortedPlayList = [...musical_artist[0].songs];
    // sortedPlayList.forEach((element) => {
    // console.log(`Original: ${element.name}`);
    // });
  }
  // console.log("#".repeat(99));
  isShuffled = !isShuffled;
  shuflleButton.classList.toggle("button-active");
}

function repeatButtonClicked() {
  repeatOn = !repeatOn;
  repeatButton.classList.toggle("button-active");
}
function nextOrRepeat() {
  if (repeatOn === false) {
    nextSong();
  } else {
    playSong();
  }
}

function toHHMMSS(originalNumber) {
  let hours = (originalNumber / 3600) | 0;
  let minutes = (originalNumber - hours * 3600) / 60;
  let seconds = ((minutes - (minutes | 0)) * 60) | 0;
  minutes = minutes | 0;
  return `
    ${hours.toString().padStart(2, "0")}:\
    ${minutes.toString().padStart(2, "0")}:\
    ${seconds.toString().padStart(2, "0")}
  `;
}

function updateTotalTime() {
  //  if(!song.paused)
  //    song.pause();
  totalTime.innerText = toHHMMSS(song.duration);
}

function likeButtonClicked() {
  sortedPlayList[index].liked = !sortedPlayList[index].liked;
  likeButtonRender();
}

preInitialize();
play.addEventListener("click", playPauseDecider);
previous.addEventListener("click", () => {
  previousSong();
  preInitialize();
  playPauseDecider();
});

next.addEventListener("click", () => {
  nextSong();
});

song.addEventListener("timeupdate", updateProgress);
song.addEventListener("ended", (e) => {
  console.log("Ended evento");
  nextOrRepeat;
});
song.addEventListener("loadedmetadata", updateTotalTime);
progressContainer.addEventListener("click", jumpTo);
shuflleButton.addEventListener("click", shuffleButtonClicked);
repeatButton.addEventListener("click", repeatButtonClicked);
likeButton.addEventListener("click", likeButtonClicked);
