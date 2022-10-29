let profileInfo = JSON.parse(localStorage.getItem("profileInfo"));

document.getElementById("confirmBtn").addEventListener("click", changeNickName);
document.querySelector("#eye1").addEventListener("click", visible1);


function changeNickName(event) {
    console.log("Work")
    let uyeler = profileInfo;
    let uye = localStorage.getItem("uye");
    let SifreKontrol = localStorage.getItem("uye-password")
    let newNickName = document.getElementById("nickname")
    let newPassword = document.getElementById("newpassword");

    if (newNickName.value != "" && newPassword.value != "" ) {
            if(SifreKontrol == newPassword.value){
                console.log("Equal");
                uyeler[uye].username = newNickName.value;
                localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
                localStorage.setItem("uye-username", newNickName.value)
                window.location.href = "../html/profil.html"
            }
            else {
                alert("Şifreniz Doğru Değil")
            }
        }
    else {
        alert("Lütfen Gerekli Alanları Doldurunuz");
      }

    event.preventDefault();
}

function visible1() {
    let visible = document.getElementById("newpassword");
    if (visible.type == "password") {
      visible.type = "text";
      document.getElementById("eye1").src = "/Images/eyecloseicon.png";
    } else {
      visible.type = "password";
      document.getElementById("eye1").src = "/Images/eyeicon.png";
    }
  }