/*let contentsPhoto = [
  { "id:": 1, "photoName:": "Fight Club1", "photoAdress:": "" },
  { "id:": 2, "photoName:": "Fight Club2", "photoAdress:": "" },
  { "id:": 3, "photoName:": "Fight Club3", "photoAdress:": "" },
  { "id:": 4, "photoName:": "Inception1", "photoAdress:": "" },
  { "id:": 5, "photoName:": "Inception2", "photoAdress:": "" },
  { "id:": 6, "photoName:": "Inception3", "photoAdress:": "" },
  { "id:": 7, "photoName:": "Taxi Driver1", "photoAdress:": "" },
  { "id:": 8, "photoName:": "Taxi Driver2", "photoAdress:": "" },
  { "id:": 9, "photoName:": "Taxi Driver3", "photoAdress:": "" },
  { "id:": 10, "photoName:": "Truman Show1", "photoAdress:": "" },
  { "id:": 11, "photoName:": "Truman Show2", "photoAdress:": "" },
  { "id:": 12, "photoName:": "Truman Show3", "photoAdress:": "" },
  { "id:": 13, "photoName:": "Matrix1", "photoAdress:": "" },
  { "id:": 14, "photoName:": "Matrix2", "photoAdress:": "" },
  { "id:": 15, "photoName:": "Matrix3", "photoAdress:": "" },
  { "id:": 16, "photoName:": "Shawshank Redemption1", "photoAdress:": "" },
  { "id:": 17, "photoName:": "Shawshank Redemption2", "photoAdress:": "" },
  { "id:": 18, "photoName:": "Shawshank Redemption3", "photoAdress:": "" },
  { "id:": 19, "photoName:": "The Dark Night1", "photoAdress:": "" },
  { "id:": 20, "photoName:": "The Dark Night2", "photoAdress:": "" },
  { "id:": 21, "photoName:": "The Dark Night3", "photoAdress:": "" },
];

console.log(contentsPhoto[1].id)

for (i in contentsPhoto) {
  console.log(contentsPhoto[i])
  contentsPhoto.push({
    "id": contentsPhoto[i].id,
    "photoName:": contentsPhoto[i].photoName,
    "photoAdress:": contentsPhoto[i].photoAdress,
  });
  console.log("Id:",contentsPhoto[i].id,"     Name:", contentsPhoto[i].photoName, "       Adress:", contentsPhoto[i].photoAdress)
}
console.log("Id:",contentsPhoto[1])

localStorage.setItem("contentsPhoto", contentsPhoto);*/

document.getElementById("signup").addEventListener("click", signUpBtn);
document.getElementById("signin").addEventListener("click", signInBtn);
document
  .getElementById("forgotpassword")
  .addEventListener("click", forgotPasswordBtn);
document.querySelector("#eye").addEventListener("click", visible);

function signUpBtn(event) {
  console.log("Sign Up");
  window.location.href = "kayit-ol.html";
  event.preventDefault();
}

function forgotPasswordBtn(event) {
  console.log("Forgot Password");
  window.location.href = "sifremi-unuttum.html";
  event.preventDefault();
}

function signInBtn(event) {
  console.log("Sign In");
  let kullaniciAdi = document.getElementById("nickname");
  let sifre = document.getElementById("password");
  let uyeler = JSON.parse(localStorage.getItem("profileInfo"));
  let onay = false;

  if (kullaniciAdi.value != "" && sifre.value != "") {
    for (uye in uyeler) {
      if (
        uyeler[uye].username == kullaniciAdi.value ||
        uyeler[uye].email == kullaniciAdi.value
      ) {
        if (uyeler[uye].password == sifre.value) {
          console.log("Correct");
          localStorage.setItem("uye-email", uyeler[uye].email);
          localStorage.setItem("uye-username", uyeler[uye].username);
          localStorage.setItem("uye-password", uyeler[uye].password);
          localStorage.setItem(
            "uye-registrationdate",
            uyeler[uye].registrationdate
          );
          localStorage.setItem("uye-profilephoto", uyeler[uye].profilephoto);
          localStorage.setItem("uye", uye);
          onay = true;
          window.location.href = "menu.html";
        } else {
          console.log("Wrong");
        }
      }
    }
    if (onay == false) {
      alert("Kullanıcı Adı / E-posta veya Şifre Yanlış");
    }
  } else {
    alert("Lütfen Gerekli Alanları Doldurunuz");
  }

  event.preventDefault();
}

window.onkeyup = function (event) {
  if (event.keyCode == 13) {
    signInBtn(event)
  }
};

function visible() {
  let visible = document.getElementById("password");
  if (visible.type == "password") {
    visible.type = "text";
    document.getElementById("eye").src = "../Images/eyecloseicon.png";
  } else {
    visible.type = "password";
    document.getElementById("eye").src = "../Images/eyeicon.png";
  }
}
