$('.menu').click(function() {
            $('ul').toggleClass('open')
})
$('#knap').click(function() {
            $('div').toggleClass('open-tab')
})
window.addEventListener("scroll", function() {
  var adv = document.getElementById("adv");
  var advtwo = document.getElementById("advtwo");
  var bcg = document.getElementById("anker-one");
  var bcgtwo = document.getElementById("anker-two");
  var mySound = document.getElementById("myaudio"); // select audio id
  var lyd = document.getElementById("lyd");
      // first box
    if (elFllVsbl(bcg)) {
        adv.classList.add("info");
        advtwo.classList.add("info");
    }
})
function elFllVsbl(el) {
  return (
    el.getBoundingClientRect().top >= 0 
  );

  }
