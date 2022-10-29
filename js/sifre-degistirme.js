let profileInfo = JSON.parse(localStorage.getItem("profileInfo"));

document.getElementById("confirmBtn").addEventListener("click", changePassword);
document.querySelector("#eye1").addEventListener("click", visible1);
document.querySelector("#eye2").addEventListener("click", visible2);
document.querySelector("#eye3").addEventListener("click", visible3);

function changePassword(event) {
  console.log("Work");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye");
  let eskiSifreKontrol = localStorage.getItem("uye-password")
  let oldPassword = document.getElementById("oldpassword")
  let newPassword = document.getElementById("newpassword");
  let newPasswordAgain = document.getElementById("newpasswordagain");


  if (newPassword.value != "" && newPasswordAgain.value != "" && oldPassword.value != "") {
      if (eskiSifreKontrol == oldPassword.value) {
        if (oldPassword.value != newPassword.value && oldPassword.value != newPasswordAgain.value) {
            if(newPassword.value == newPasswordAgain.value) {
                console.log("Equal");
                uyeler[uye].password = newPassword.value;
                uyeler[uye].passwordagain = newPasswordAgain.value;
                localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
                localStorage.setItem("uye-password", newPassword.value)
                window.location.href = "profil.html"
            }
            else {
                alert("Şifreler Birbiriyle Uyuşmuyor");
            }
        }
        else {
            alert("Yeni Şifre Eski Şifrenin Aynısı Olamaz")
        }
    } 
    else {
        alert("Eski Şifreniz Doğru Değil")
    }  
  } 
  else {
    alert("Lütfen Gerekli Alanları Doldurunuz");
  }
  event.preventDefault();
}

function visible1() {
  let visible = document.getElementById("oldpassword");
  if (visible.type == "password") {
    visible.type = "text";
    document.getElementById("eye1").src = "/Images/eyecloseicon.png";
  } else {
    visible.type = "password";
    document.getElementById("eye1").src = "/Images/eyeicon.png";
  }
}

function visible2() {
  let visible = document.getElementById("newpassword");
  if (visible.type == "password") {
    visible.type = "text";
    document.getElementById("eye2").src = "/Images/eyecloseicon.png";
  } else {
    visible.type = "password";
    document.getElementById("eye2").src = "/Images/eyeicon.png";
  }
}

function visible3() {
  let visible = document.getElementById("newpasswordagain");
  if (visible.type == "password") {
    visible.type = "text";
    document.getElementById("eye3").src = "/Images/eyecloseicon.png";
  } else {
    visible.type = "password";
    document.getElementById("eye3").src = "/Images/eyeicon.png";
  }
}
