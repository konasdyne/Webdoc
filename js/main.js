//Play
var playsorrow = document.getElementById("playsorrow");
var _audio1 = document.getElementById("audio1");
var playmile = document.getElementById("playmile");
var _audio2 = document.getElementById("audio2");
var playmama = document.getElementById("playmama");
var _audio3 = document.getElementById("audio3");
//Pause
var pauseone = document.getElementById("pauseone");
var pausetwo = document.getElementById("pausetwo");
var pausethree = document.getElementById("pausethree");
var sec1 = document.getElementById("sec1");
var sec2 = document.getElementById("sec2");
var sec3 = document.getElementById("sec3");
var sec4 = document.getElementById("sec4");
var sec5 = document.getElementById("sec5");

var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
var nav5 = document.getElementById("nav5");

playsorrow.addEventListener("click", sorrowFunc);
pauseone.addEventListener("click", sorrowStop);
playmile.addEventListener("click", oneMile);
pausetwo.addEventListener("click", mileStop);
playmama.addEventListener("click", bigMama);
pausethree.addEventListener("click", mamaStop);

function sorrowFunc() {
      _audio1.play();
      _audio1.volume = .2;
      playsorrow.classList.remove("active-btn");
      pauseone.classList.add("active-btn");
}
function sorrowStop() {
  _audio1.pause();
  _audio1.currentTime = 0;
  playsorrow.classList.add("active-btn");
  pauseone.classList.remove("active-btn");
}
function oneMile() {
      _audio2.play();
      _audio2.volume = .2;
      playmile.classList.remove("active-btn");
      pausetwo.classList.add("active-btn");
}
function mileStop() {
  _audio2.pause();
  _audio2.currentTime = 0;
  playmile.classList.add("active-btn");
  pausetwo.classList.remove("active-btn");
}
function bigMama() {
      _audio3.play();
      _audio3.volume = .2;
      playmama.classList.remove("active-btn");
      pausethree.classList.add("active-btn");
}
function mamaStop() {
  _audio3.pause();
  _audio3.currentTime = 0;
  playmama.classList.add("active-btn");
  pausethree.classList.remove("active-btn");
}

window.addEventListener("scroll", function() {
if (elFllVsbl(sec1)) {
  nav1.style.background = "#993366";
  nav1.style.border = "1px solid #993366";
  nav2.style.background = "none";
} else if (elFllVsbl(sec2)) {
  nav1.style.background = "none";
  nav2.style.background = "#cc3366";
  nav2.style.border = "1px solid #cc3366";
  nav3.style.background = "none";
}else if (elFllVsbl(sec3)) {
  nav2.style.background = "none";
  nav3.style.background = "#666699";
  nav3.style.border = "1px solid #666699";
  nav4.style.background = "none";
}else if (elFllVsbl(sec4)) {
  nav3.style.background = "none";
  nav4.style.background = "#ffff33";
  nav4.style.border = "1px solid #ffff33";
  nav5.style.background = "none";
}else if (elFllVsbl(sec5)) {
  nav5.style.background = "#cc6633";
  nav5.style.border = "1px solid #cc6633";
  nav4.style.background = "none";
};

});
function elFllVsbl(el) {
  return (
    el.getBoundingClientRect().top >= 0
  );
}
