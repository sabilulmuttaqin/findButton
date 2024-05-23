const box = document.querySelector(".box");
const audio = document.getElementById("audio");
const button = document.getElementById("button");
const body = document.body;

button.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (box.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
box.classList.add('visible')
  box.classList.toggle("size");
  setTimeout(() => {
    box.classList.toggle("caption");
    body.classList.toggle("bg");
    box.style.display = 'flex'; 
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, 600);

});
