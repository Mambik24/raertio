let profileInfo = JSON.parse(localStorage.getItem("profileInfo"));

document.getElementById("confirmBtn").addEventListener("click", nickConfirm);

function nickConfirm(event) {
  console.log("Work");
  let kullaniciAdiEposta = document.getElementById("userNameEmail");
  let uyeler = profileInfo;

  if (kullaniciAdiEposta.value != "") {
    for (uye in uyeler) {
      if (uyeler[uye].username == kullaniciAdiEposta.value ||uyeler[uye].email == kullaniciAdiEposta.value) {
        console.log("Accepted Email");
        //console.log("Before:",uyeler[uye].password)
        //uyeler[uye].password = "10145276"
        //console.log("After:",uyeler[uye].password)
        //localStorage.setItem("profileInfo", JSON.stringify(profileInfo))
        localStorage.setItem("uye", uye);
        window.location.href = "yenisifre.html";
      }
    }
  } else {
    alert("Lütfen Gerekli Alanları Doldurunuz");
  }
  event.preventDefault();
}
