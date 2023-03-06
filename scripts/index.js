const zoomableElement = document.getElementById('zoomable-element');
const haircutSample1 = document.getElementById('haircut-sample1');
const haircutSample2 = document.getElementById('haircut-sample2');
const haircutBtnSample1 = document.getElementById('haircut-btn-sample1');
const haircutBtnSample2 = document.getElementById('haircut-btn-sample2');

zoomableElement.addEventListener('click', () => {
    zoomableElement.classList.toggle('zoomed');
});


function setSelectedHairCut(haircutId) {
    var haircut = document.getElementById(haircutId);
    var haircuts = document.getElementsByClassName('haircut');

    for (var i = 0; i < haircuts.length; i++) {
      if (haircuts[i] === haircut) {
        haircuts[i].classList.add("visible");
      } else {
        haircuts[i].classList.remove("visible");
      }
    }
  }
  
  
  