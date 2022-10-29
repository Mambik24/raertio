let profileInfo = JSON.parse(localStorage.getItem("profileInfo"));

document.getElementById("confirmBtn").addEventListener("click", newPassword);
document.querySelector("#eye1").addEventListener("click", visible1);
document.querySelector("#eye2").addEventListener("click", visible2);

function newPassword(event) {
  console.log("Work");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye")
  let newPassword = document.getElementById("newpassword");
  let newPasswordAgain = document.getElementById("newpasswordagain");

  if (newPassword.value != "" && newPasswordAgain.value != "") {
    if (newPassword.value == newPasswordAgain.value) {
      console.log("Equal");
      uyeler[uye].password = newPassword.value;
      uyeler[uye].passwordagain = newPasswordAgain.value;
      localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
      window.location.href = "index.html"
    } else {
        alert("Şifreler Birbiriyle Uyuşmuyor");
    }
  } else {
    alert("Lütfen Gerekli Alanları Doldurunuz");
  }

  event.preventDefault();
}

function visible1() {
    let visible = document.getElementById("newpassword");
    if(visible.type == "password") {
      visible.type = "text";
      document.getElementById("eye1").src = "/Images/eyecloseicon.png"
    }
    else {
      visible.type = "password";
      document.getElementById("eye1").src = "/Images/eyeicon.png"
    }
  }
  
  function visible2() {
    let visible = document.getElementById("newpasswordagain");
    if(visible.type == "password") {
      visible.type = "text";
      document.getElementById("eye2").src = "/Images/eyecloseicon.png"
    }
    else {
      visible.type = "password";
      document.getElementById("eye2").src = "/Images/eyeicon.png"
    }
  }