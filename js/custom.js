function loadBackground() {
  var numBackgrounds = 23;
  var num = Math.ceil( Math.random() * (numBackgrounds+1) );
  if(num > numBackgrounds){
    num = 15;
  }
  document.body.background = 'images/bg/img'+num+'.jpg';
  document.body.style.backgroundSize = "cover";// Background repeat
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("navbars").style.display ="none";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("navbars").style.display ="block";
}

function hideAll(){
  document.getElementById("landing").style.display ="none";
  document.getElementById("about").style.display ="none";
  document.getElementById("initiatives").style.display ="none";
  document.getElementById("eboard").style.display ="none";
  document.getElementById("partners").style.display ="none";
  document.getElementById("members").style.display ="none";
  document.getElementById("newsletter").style.display ="none";
  document.getElementById("contact").style.display ="none";
}

function showAbout(){
  closeNav();
  hideAll();
  document.getElementById("about").style.display ="block";
}

function showInitiatives(){
  closeNav();
  hideAll();
  document.getElementById("initiatives").style.display ="block";
}

function showEBoard(){
  closeNav();
  hideAll();
  document.getElementById("eboard").style.display ="block";
}

function showPartners(){
  closeNav();
  hideAll();
  document.getElementById("partners").style.display ="block";
}

function showMembers(){
  closeNav();
  hideAll();
  document.getElementById("members").style.display ="block";
}

function showNewsletter(){
  closeNav();
  hideAll();
  document.getElementById("newsletter").style.display ="block";
}

function showContact(){
  closeNav();
  hideAll();
  document.getElementById("contact").style.display ="block";
}



$(window).load(function() {
  setTimeout(function(){
    // Animate loader off screen
    $(".se-pre-con").fadeOut("fast");
    $("body").removeClass("preload");
  }, 1);
});
