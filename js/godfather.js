document.getElementById("galleryBtn").addEventListener("click", galleryOpen);

function galleryOpen() {
  console.log("Work");
  document.querySelector("#gallery-container").style.opacity = 1;
  document.querySelector("#gallery-container").style.pointerEvents = "auto";
  document.querySelector("#gallery-photo").style.width = "100%";
  document.querySelector("#gallery-photo").style.left = "0%";
  document.querySelector("#gallery-photo").src = "../../Images/thegodfather.png";
}

window.onkeyup = function (event) {
  if (event.keyCode == 27) {
    document.querySelector("#gallery-container").style.opacity = 0;
    document.querySelector("#gallery-container").style.pointerEvents = "none";
  }
};