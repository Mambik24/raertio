let profileInfo = [];

if (localStorage.getItem("profileInfo") != null) {
  profileInfo = JSON.parse(localStorage.getItem("profileInfo"));
}

document.querySelector("#memberAddBtn").addEventListener("click", signUp);
document.querySelector("#eye1").addEventListener("click", visible1);
document.querySelector("#eye2").addEventListener("click", visible2);

function signUp(event) {
  let eposta = document.getElementById("email");
  let kullanici = document.getElementById("nickname");
  let sifre = document.getElementById("password");
  let sifretekrar = document.getElementById("passwordagain");
  let profilresmi = "../Images/avatar0.png";

  const tarih = new Date();
  let year = tarih.getFullYear();
  let month = tarih.getMonth() + 1;
  let day = tarih.getDate();
  let date = day + "/" + month + "/" + year;

  if (
    eposta.value != "" &&
    kullanici.value != "" &&
    sifre.value != "" &&
    sifretekrar.value != ""
  ) {
    if (sifre.value == sifretekrar.value) {
      profileInfo.push({
        id: profileInfo.length,
        email: eposta.value,
        username: kullanici.value,
        password: sifre.value,
        passwordagain: sifretekrar.value,
        registrationdate: date,
        profilephoto: profilresmi
      });
      localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
      window.location.href = "index.html";
    } else {
      {
        alert("Şifreler Uyuşmuyor");
      }
    }
    event.preventDefault();
  } else {
    alert("Lütfen Gerekli Alanları Doldurunuz");
  }
}

function visible1() {
  let visible = document.getElementById("password");
  if (visible.type == "password") {
    visible.type = "text";
    document.getElementById("eye1").src = "../Images/eyecloseicon.png";
  } else {
    visible.type = "password";
    document.getElementById("eye1").src = "../Images/eyeicon.png";
  }
}

function visible2() {
  let visible = document.getElementById("passwordagain");
  if (visible.type == "password") {
    visible.type = "text";
    document.getElementById("eye2").src = "../Images/eyecloseicon.png";
  } else {
    visible.type = "password";
    document.getElementById("eye2").src = "../Images/eyeicon.png";
  }
}
