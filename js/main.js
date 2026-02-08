function startLove() {
  const music = document.getElementById("bg-music");
  music.volume = 0.5;
  music.play();

  setTimeout(() => {
    window.location.href = "week.html";
  }, 500);
}
