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
  var bcgthree = document.getElementById("anker-three");
  var gly = document.getElementById("gallery");
      // first box
    if (elFllVsbl(bcg)) {
        adv.classList.add("info");
        advtwo.classList.add("info");
    }
    if (elFllVsbl(bcgthree)) {
      gly.classList.add("show-gallery");
    }
})
function elFllVsbl(el) {
  return (
    el.getBoundingClientRect().top >= 0
  );

  }
