var numBackgrounds = 8;
function loadBackground() {
  var num = Math.ceil( Math.random() * numBackgrounds );
  document.body.background = 'images/bg/img'+num+'.jpg';
  document.body.style.backgroundSize = "cover";// Background repeat
}
