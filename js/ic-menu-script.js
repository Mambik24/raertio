function searchBoxMoveIn() {
  console.log("Focus In");

  document.querySelector(".arama").style.width = "20%";
  document.querySelector(".ikon-instagram").style.left = "23%";
  document.querySelector(".ikon-twitter").style.left = "30%";
}

function searchBoxMoveOut() {
  console.log("Focus Out");

  document.querySelector(".arama").style.width = "12%";
  document.querySelector(".ikon-instagram").style.left = "15%";
  document.querySelector(".ikon-twitter").style.left = "22%";
}

function borderEffect1Movie() {
  console.log("Open");
  document.querySelector("#movie").style.height = "260px";
  //document.querySelector("#movie").style.top = "40%";
}

function borderEffectOMovie() {
  console.log("Close");
  document.querySelector("#movie").style.height = "250px";
  //document.querySelector("#movie").style.top = "50%";
}

function movieButton() {
  console.log("Link")
  //document.querySelector("#movie").innerText = ("<a href='film-ana.html'></a>")
}

function scroll1() {
  console.log("Scroll");
  document.querySelector("#movie").style.top = "15%";
  document.querySelector("#book").style.top = "15%";
  document.querySelector("#game").style.top = "15%";
  document.querySelector("#container3").style.bottom = "2%";
  document.querySelector("#container1").style.top="0%"
}

function borderEffect1Book() {
  console.log("Open");
  document.querySelector("#book").style.height = "260px";
}

function borderEffectOBook() {
  console.log("Close");
  document.querySelector("#book").style.height = "250px";
}

function borderEffect1Game() {
  console.log("Open");
  document.querySelector("#game").style.height = "260px";
}

function borderEffectOGame() {
  console.log("Close");
  document.querySelector("#game").style.height = "250px";
}