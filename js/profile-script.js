let profileInfo = JSON.parse(localStorage.getItem("profileInfo"));

infoUpdate();

function infoUpdate() {
  console.log("Info Update");

  document.getElementById("infos").innerHTML = `
      <p id="username">Kullanıcı Adı: ${localStorage.getItem(
        "uye-username"
      )}</p>
      <p id="membership-date">Üyelik Tarihi: ${localStorage.getItem(
        "uye-registrationdate"
      )}</p>
  `;
}

function openAccountSettingsBox() {
  console.log("Open");
  document.querySelector(".play0").style.transform = "rotate(90deg)";
  document.querySelector(".password-change-button").style.pointerEvents = "auto";
  document.querySelector(".nickname-change-button").style.pointerEvents = "auto";
  document.querySelector(".delete-account-button").style.pointerEvents = "auto";
  document.querySelector(".password-change-button").style.opacity = 1;
  document.querySelector(".nickname-change-button").style.opacity = 1;
  document.querySelector(".delete-account-button").style.opacity = 1;
}

function closeAccountSettingsBox() {
  console.log("Close");
  document.querySelector(".play0").style.transform = "rotate(180deg)";
  document.querySelector(".password-change-button").style.opacity = 0;
  document.querySelector(".nickname-change-button").style.opacity = 0;
  document.querySelector(".delete-account-button").style.opacity = 0;
}

// ACTIVITY BOXES //
/*function openWatchActivity() {
  console.log("Open");
  document.querySelector(".play1").style.transform = "rotate(90deg)";
  document.querySelector("#watchlist").style.opacity = 1;
  document.querySelector(".readlist-button").style.opacity = 0;
  document.querySelector(".readlist-button").style.pointerEvents = "none";
  document.querySelector(".gamelist-button").style.opacity = 0;
  document.querySelector(".gamelist-button").style.pointerEvents = "none";
}

function closeWatchActivity() {
  console.log("Close");
  document.querySelector(".play1").style.transform = "rotate(180deg)";
  document.querySelector("#watchlist").style.opacity = 0;
  document.querySelector(".readlist-button").style.opacity = 1;
  document.querySelector(".readlist-button").style.pointerEvents = "auto";
  document.querySelector(".gamelist-button").style.opacity = 1;
  document.querySelector(".gamelist-button").style.pointerEvents = "auto";
}

function openReadActivity() {
  console.log("Open");
  document.querySelector(".play2").style.transform = "rotate(90deg)";
  document.querySelector("#readlist").style.opacity = 1;
  document.querySelector(".watchlist-button").style.opacity = 0;
  document.querySelector(".watchlist-button").style.pointerEvents = "none";
  document.querySelector(".gamelist-button").style.opacity = 0;
  document.querySelector(".gamelist-button").style.pointerEvents = "none";
}

function closeReadActivity() {
  console.log("Close");
  document.querySelector(".play2").style.transform = "rotate(180deg)";
  document.querySelector("#readlist").style.opacity = 0;
  document.querySelector(".watchlist-button").style.opacity = 1;
  document.querySelector(".watchlist-button").style.pointerEvents = "auto";
  document.querySelector(".gamelist-button").style.opacity = 1;
  document.querySelector(".gamelist-button").style.pointerEvents = "auto";
}

function openGameActivity() {
  console.log("Open");
  document.querySelector(".play3").style.transform = "rotate(90deg)";
  document.querySelector("#gamelist").style.opacity = 1;
  document.querySelector(".watchlist-button").style.opacity = 0;
  document.querySelector(".watchlist-button").style.pointerEvents = "none";
  document.querySelector(".readlist-button").style.opacity = 0;
  document.querySelector(".readlist-button").style.pointerEvents = "none";
}

function closeGameActivity() {
  console.log("Close");
  document.querySelector(".play3").style.transform = "rotate(180deg)";
  document.querySelector("#gamelist").style.opacity = 0;
  document.querySelector(".watchlist-button").style.opacity = 1;
  document.querySelector(".watchlist-button").style.pointerEvents = "auto";
  document.querySelector(".readlist-button").style.opacity = 1;
  document.querySelector(".readlist-button").style.pointerEvents = "auto";
}
// ACTIVITY BOXES //

// VOTE BOXER //
function openWatchVote() {
  console.log("Open");
  document.querySelector(".play4").style.transform = "rotate(90deg)";
  document.querySelector("#watchlist-vote").style.opacity = 1;
  document.querySelector(".watchlist-button").style.opacity = 0;
  document.querySelector(".watchlist-button").style.pointerEvents = "none";
  document.querySelector(".readlist-button").style.opacity = 0;
  document.querySelector(".readlist-button").style.pointerEvents = "none";
  document.querySelector(".gamelist-button").style.opacity = 0;
  document.querySelector(".gamelist-button").style.pointerEvents = "none";
  document.querySelector(".watch-vote-button").style.top = "20%";
}

function closeWatchVote() {
  console.log("Close");
  document.querySelector(".play4").style.transform = "rotate(180deg)";
  document.querySelector("#watchlist-vote").style.opacity = 0;
  document.querySelector(".watchlist-button").style.opacity = 1;
  document.querySelector(".watchlist-button").style.pointerEvents = "auto";
  document.querySelector(".readlist-button").style.opacity = 1;
  document.querySelector(".readlist-button").style.pointerEvents = "auto";
  document.querySelector(".gamelist-button").style.opacity = 1;
  document.querySelector(".gamelist-button").style.pointerEvents = "auto";
  document.querySelector(".watch-vote-button").style.top = "45%";
}

function openReadVote() {
  console.log("Open");
  document.querySelector(".play5").style.transform = "rotate(90deg)";
  document.querySelector("#readlist-vote").style.opacity = 1;
  document.querySelector(".watchlist-button").style.opacity = 0;
  document.querySelector(".watchlist-button").style.pointerEvents = "none";
  document.querySelector(".readlist-button").style.opacity = 0;
  document.querySelector(".readlist-button").style.pointerEvents = "none";
  document.querySelector(".gamelist-button").style.opacity = 0;
  document.querySelector(".gamelist-button").style.pointerEvents = "none";
  document.querySelector(".read-vote-button").style.top = "20%";
}

function closeReadVote() {
  console.log("Close");
  document.querySelector(".play5").style.transform = "rotate(180deg)";
  document.querySelector("#readlist-vote").style.opacity = 0;
  document.querySelector(".watchlist-button").style.opacity = 1;
  document.querySelector(".watchlist-button").style.pointerEvents = "auto";
  document.querySelector(".readlist-button").style.opacity = 1;
  document.querySelector(".readlist-button").style.pointerEvents = "auto";
  document.querySelector(".gamelist-button").style.opacity = 1;
  document.querySelector(".gamelist-button").style.pointerEvents = "auto";
  document.querySelector(".read-vote-button").style.top = "45%";
}

function openGameVote() {
  console.log("Open");
  document.querySelector(".play6").style.transform = "rotate(90deg)";
  document.querySelector("#gamelist-vote").style.opacity = 1;
  document.querySelector(".watchlist-button").style.opacity = 0;
  document.querySelector(".watchlist-button").style.pointerEvents = "none";
  document.querySelector(".readlist-button").style.opacity = 0;
  document.querySelector(".readlist-button").style.pointerEvents = "none";
  document.querySelector(".gamelist-button").style.opacity = 0;
  document.querySelector(".gamelist-button").style.pointerEvents = "none";
  document.querySelector(".watch-comment-button").style.opacity = 0;
  document.querySelector(".watch-comment-button").style.pointerEvents = "none";
  document.querySelector(".game-vote-button").style.top = "20%";
}

function closeGameVote() {
  console.log("Close");
  document.querySelector(".play6").style.transform = "rotate(180deg)";
  document.querySelector("#gamelist-vote").style.opacity = 0;
  document.querySelector(".watchlist-button").style.opacity = 1;
  document.querySelector(".watchlist-button").style.pointerEvents = "auto";
  document.querySelector(".readlist-button").style.opacity = 1;
  document.querySelector(".readlist-button").style.pointerEvents = "auto";
  document.querySelector(".gamelist-button").style.opacity = 1;
  document.querySelector(".gamelist-button").style.pointerEvents = "auto";
  document.querySelector(".watch-comment-button").style.opacity = 1;
  document.querySelector(".watch-comment-button").style.pointerEvents = "auto";
  document.querySelector(".game-vote-button").style.top = "45%";
}
// VOTE BOXER //

// COMMENT BOXER //
function openWatchComment() {
  console.log("Open");
  document.querySelector(".play7").style.transform = "rotate(90deg)";
  document.querySelector("#watchlist-comment").style.opacity = 1;
  document.querySelector(".watchlist-button").style.opacity = 0;
  document.querySelector(".watchlist-button").style.pointerEvents = "none";
  document.querySelector(".readlist-button").style.opacity = 0;
  document.querySelector(".readlist-button").style.pointerEvents = "none";
  document.querySelector(".gamelist-button").style.opacity = 0;
  document.querySelector(".gamelist-button").style.pointerEvents = "none";
  document.querySelector(".watch-vote-button").style.opacity = 0;
  document.querySelector(".watch-vote-button").style.pointerEvents = "none";
  document.querySelector(".read-vote-button").style.opacity = 0;
  document.querySelector(".read-vote-button").style.pointerEvents = "none";
  document.querySelector(".game-vote-button").style.opacity = 0;
  document.querySelector(".game-vote-button").style.pointerEvents = "none";
  document.querySelector(".watch-comment-button").style.top = "20%";
}

function closeWatchComment() {
  console.log("Close");
  document.querySelector(".play7").style.transform = "rotate(180deg)";
  document.querySelector("#watchlist-comment").style.opacity = 0;
  document.querySelector(".watchlist-button").style.opacity = 1;
  document.querySelector(".watchlist-button").style.pointerEvents = "auto";
  document.querySelector(".readlist-button").style.opacity = 1;
  document.querySelector(".readlist-button").style.pointerEvents = "auto";
  document.querySelector(".gamelist-button").style.opacity = 1;
  document.querySelector(".gamelist-button").style.pointerEvents = "auto";
  document.querySelector(".watch-vote-button").style.opacity = 1;
  document.querySelector(".watch-vote-button").style.pointerEvents = "auto";
  document.querySelector(".read-vote-button").style.opacity = 1;
  document.querySelector(".read-vote-button").style.pointerEvents = "auto";
  document.querySelector(".game-vote-button").style.opacity = 1;
  document.querySelector(".game-vote-button").style.pointerEvents = "auto";
  document.querySelector(".watch-comment-button").style.top = "70%";
}*/

// COMMENT BOX //

function openChangePP() {
  console.log("Open PP");
  document.querySelector("#profile-pic-change-sceen").style.opacity = "1";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "auto";
  document.querySelector("#profile-pic-text-box").style.opacity = "1";
  document.querySelector("#pic1").style.pointerEvents = "auto";
  document.querySelector("#pic2").style.pointerEvents = "auto";
  document.querySelector("#pic3").style.pointerEvents = "auto";
  document.querySelector("#pic4").style.pointerEvents = "auto";
  document.querySelector("#pic5").style.pointerEvents = "auto";
  document.querySelector("#pic6").style.pointerEvents = "auto";
  document.querySelector("#pic7").style.pointerEvents = "auto";
  document.querySelector("#pic8").style.pointerEvents = "auto";
}

function openPointerEvent() {
  console.log("Work");
}

function closeChangePP() {
  console.log("Close PP");
  document.querySelector("#profile-pic-change-sceen").style.opacity = "0";
  document.querySelector("#profile-pic-text-box").style.opacity = "0";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "none";
}

function changePassword() {
  window.location.href = "../html/sifre-degistirme.html";
}

function changeNickname() {
  window.location.href = "../html/kullaniciadi-degistirme.html";
}

function openDeleteBox() {
  document.querySelector("#delete-account-box").style.opacity = 1;
  document.querySelector("#yes").style.pointerEvents = "auto";
  document.querySelector("#no").style.pointerEvents = "auto";
}

document.getElementById("yes").addEventListener("click", yes);
document.getElementById("no").addEventListener("click", no);

function yes() {
  console.log("Yes")
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye")
  let kullanici = localStorage.getItem("uye-username")
  let deletedUser;
  let uye_email = localStorage.getItem("uye-email")
  let uye_username = localStorage.getItem("uye-username")
  let uye_password = localStorage.getItem("uye-password")
  let uye_registrationdate = localStorage.getItem("uye-password")
  let uye_profilephoto = localStorage.getItem("uye-password")
  
  if(uyeler[uye].username == kullanici) {
    deletedUser = uye;
  }

  uye_email = ""
  uye_username = ""
  uye_password = ""
  uye_registrationdate = ""
  uye_profilephoto = ""
  uye = ""
  
  profileInfo.splice(deletedUser, 1)
  localStorage.setItem("profileInfo", JSON.stringify(profileInfo))
  localStorage.setItem("uye-email", uye_email)
  localStorage.setItem("uye-username", uye_username)
  localStorage.setItem("uye-password", uye_password)
  localStorage.setItem("uye-registrationdate", uye_registrationdate)
  localStorage.setItem("uye-profilephoto", uye_profilephoto)
  localStorage.setItem("uye", uye);  

  document.querySelector("#yes").style.pointerEvents = "none";
  document.querySelector("#no").style.pointerEvents = "none";
  window.location.href = "index.html";
}

function no() {
  document.querySelector("#delete-account-box").style.opacity = 0;
  document.querySelector("#yes").style.pointerEvents = "none";
  document.querySelector("#no").style.pointerEvents = "none";
}

function changePic1() {
  console.log("Change");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye");
  let uye_profilephoto = localStorage.getItem("uye-profilephoto");
  document.querySelector("#profile-pic").src = "../Images/avatar1.png";
  uye_profilephoto = "../Images/avatar1.png";
  uyeler[uye].profilephoto = "../Images/avatar1.png";
  localStorage.setItem("uye-profilephoto", uye_profilephoto);
  localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
  document.querySelector("#pic1").style.pointerEvents = "none";
  document.querySelector("#pic2").style.pointerEvents = "none";
  document.querySelector("#pic3").style.pointerEvents = "none";
  document.querySelector("#pic4").style.pointerEvents = "none";
  document.querySelector("#pic5").style.pointerEvents = "none";
  document.querySelector("#pic6").style.pointerEvents = "none";
  document.querySelector("#pic7").style.pointerEvents = "none";
  document.querySelector("#pic8").style.pointerEvents = "none";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "none";
}

function changePic2() {
  console.log("Change");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye");
  let uye_profilephoto = localStorage.getItem("uye-profilephoto");
  document.querySelector("#profile-pic").src = "../Images/avatar2.png";
  uye_profilephoto = "../Images/avatar2.png";
  uyeler[uye].profilephoto = "../Images/avatar2.png";
  localStorage.setItem("uye-profilephoto", uye_profilephoto);
  localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
  document.querySelector("#pic1").style.pointerEvents = "none";
  document.querySelector("#pic2").style.pointerEvents = "none";
  document.querySelector("#pic3").style.pointerEvents = "none";
  document.querySelector("#pic4").style.pointerEvents = "none";
  document.querySelector("#pic5").style.pointerEvents = "none";
  document.querySelector("#pic6").style.pointerEvents = "none";
  document.querySelector("#pic7").style.pointerEvents = "none";
  document.querySelector("#pic8").style.pointerEvents = "none";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "none";
}

function changePic3() {
  console.log("Change");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye");
  let uye_profilephoto = localStorage.getItem("uye-profilephoto");
  document.querySelector("#profile-pic").src = "../Images/avatar3.png";
  uye_profilephoto = "../Images/avatar3.png";
  uyeler[uye].profilephoto = "../Images/avatar3.png";
  localStorage.setItem("uye-profilephoto", uye_profilephoto);
  localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
  document.querySelector("#pic1").style.pointerEvents = "none";
  document.querySelector("#pic2").style.pointerEvents = "none";
  document.querySelector("#pic3").style.pointerEvents = "none";
  document.querySelector("#pic4").style.pointerEvents = "none";
  document.querySelector("#pic5").style.pointerEvents = "none";
  document.querySelector("#pic6").style.pointerEvents = "none";
  document.querySelector("#pic7").style.pointerEvents = "none";
  document.querySelector("#pic8").style.pointerEvents = "none";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "none";
}

function changePic4() {
  console.log("Change");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye");
  let uye_profilephoto = localStorage.getItem("uye-profilephoto");
  document.querySelector("#profile-pic").src = "../Images/avatar4.png";
  uye_profilephoto = "../Images/avatar4.png";
  uyeler[uye].profilephoto = "../Images/avatar4.png";
  localStorage.setItem("uye-profilephoto", uye_profilephoto);
  localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
  document.querySelector("#pic1").style.pointerEvents = "none";
  document.querySelector("#pic2").style.pointerEvents = "none";
  document.querySelector("#pic3").style.pointerEvents = "none";
  document.querySelector("#pic4").style.pointerEvents = "none";
  document.querySelector("#pic5").style.pointerEvents = "none";
  document.querySelector("#pic6").style.pointerEvents = "none";
  document.querySelector("#pic7").style.pointerEvents = "none";
  document.querySelector("#pic8").style.pointerEvents = "none";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "none";
}

function changePic5() {
  console.log("Change");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye");
  let uye_profilephoto = localStorage.getItem("uye-profilephoto");
  document.querySelector("#profile-pic").src = "../Images/avatar5.png";
  uye_profilephoto = "../Images/avatar5.png";
  uyeler[uye].profilephoto = "../Images/avatar5.png";
  localStorage.setItem("uye-profilephoto", uye_profilephoto);
  localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
  document.querySelector("#pic1").style.pointerEvents = "none";
  document.querySelector("#pic2").style.pointerEvents = "none";
  document.querySelector("#pic3").style.pointerEvents = "none";
  document.querySelector("#pic4").style.pointerEvents = "none";
  document.querySelector("#pic5").style.pointerEvents = "none";
  document.querySelector("#pic6").style.pointerEvents = "none";
  document.querySelector("#pic7").style.pointerEvents = "none";
  document.querySelector("#pic8").style.pointerEvents = "none";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "none";
}

function changePic6() {
  console.log("Change");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye");
  let uye_profilephoto = localStorage.getItem("uye-profilephoto");
  document.querySelector("#profile-pic").src = "../Images/avatar6.png";
  uye_profilephoto = "../Images/avatar6.png";
  uyeler[uye].profilephoto = "../Images/avatar6.png";
  localStorage.setItem("uye-profilephoto", uye_profilephoto);
  localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
  document.querySelector("#pic1").style.pointerEvents = "none";
  document.querySelector("#pic2").style.pointerEvents = "none";
  document.querySelector("#pic3").style.pointerEvents = "none";
  document.querySelector("#pic4").style.pointerEvents = "none";
  document.querySelector("#pic5").style.pointerEvents = "none";
  document.querySelector("#pic6").style.pointerEvents = "none";
  document.querySelector("#pic7").style.pointerEvents = "none";
  document.querySelector("#pic8").style.pointerEvents = "none";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "none";
}

function changePic7() {
  console.log("Change");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye");
  let uye_profilephoto = localStorage.getItem("uye-profilephoto");
  document.querySelector("#profile-pic").src = "../Images/avatar7.png";
  uye_profilephoto = "../Images/avatar7.png";
  uyeler[uye].profilephoto = "../Images/avatar7.png";
  localStorage.setItem("uye-profilephoto", uye_profilephoto);
  localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
  document.querySelector("#pic1").style.pointerEvents = "none";
  document.querySelector("#pic2").style.pointerEvents = "none";
  document.querySelector("#pic3").style.pointerEvents = "none";
  document.querySelector("#pic4").style.pointerEvents = "none";
  document.querySelector("#pic5").style.pointerEvents = "none";
  document.querySelector("#pic6").style.pointerEvents = "none";
  document.querySelector("#pic7").style.pointerEvents = "none";
  document.querySelector("#pic8").style.pointerEvents = "none";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "none";
}

function changePic8() {
  console.log("Change");
  let uyeler = profileInfo;
  let uye = localStorage.getItem("uye");
  let uye_profilephoto = localStorage.getItem("uye-profilephoto");
  document.querySelector("#profile-pic").src = "../Images/avatar8.png";
  uye_profilephoto = "../Images/avatar8.png";
  uyeler[uye].profilephoto = "../Images/avatar8.png";
  localStorage.setItem("uye-profilephoto", uye_profilephoto);
  localStorage.setItem("profileInfo", JSON.stringify(profileInfo));
  document.querySelector("#pic1").style.pointerEvents = "none";
  document.querySelector("#pic2").style.pointerEvents = "none";
  document.querySelector("#pic3").style.pointerEvents = "none";
  document.querySelector("#pic4").style.pointerEvents = "none";
  document.querySelector("#pic5").style.pointerEvents = "none";
  document.querySelector("#pic6").style.pointerEvents = "none";
  document.querySelector("#pic7").style.pointerEvents = "none";
  document.querySelector("#pic8").style.pointerEvents = "none";
  document.querySelector("#profile-pic-change-sceen").style.pointerEvents =
    "none";
}

function exitProfile() {
  console.log("Exit")
  let uye_email = localStorage.getItem("uye-email")
  let uye_username = localStorage.getItem("uye-username")
  let uye_password = localStorage.getItem("uye-password")
  let uye_registrationdate = localStorage.getItem("uye-password")
  let uye_profilephoto = localStorage.getItem("uye-password")
  let uye = localStorage.getItem("uye")

  uye_email = ""
  uye_username = ""
  uye_password = ""
  uye_registrationdate = ""
  uye_profilephoto = ""
  uye = ""
  
  localStorage.setItem("uye-email", uye_email)
  localStorage.setItem("uye-username", uye_username)
  localStorage.setItem("uye-password", uye_password)
  localStorage.setItem("uye-registrationdate", uye_registrationdate)
  localStorage.setItem("uye-profilephoto", uye_profilephoto)
  localStorage.setItem("uye", uye);
  window.location.href = "index.html";
}

localStoragePicChange();

function localStoragePicChange() {
  /*console.log(document.querySelector("#profile-pic").src)
  if(document.querySelector("#profile-pic").src != "http://localhost:5501/null")
  {
    console.log("Aynen")
    document.querySelector("#profile-pic").src = "http://localhost:5501/Images/avatar0.png"
  }
  else 
  {
    console.log("Tabi")  
  }*/

  //console.log(localStorage.getItem("uye-profilephoto"));

  document.querySelector("#profile-pic-btn").innerHTML = `
  <img id="profile-pic" src="${localStorage.getItem("uye-profilephoto")}">
  <button
        onfocusout="closeChangePP()"
        onfocusin="openChangePP()"
        id="profile-pic-change"
      >
        <img class="fa-pen" src="../Images/penicon.png"></img>
      </button>`;
}
