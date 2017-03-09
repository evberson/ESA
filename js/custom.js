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

$(window).load(function() {
   setTimeout(function(){
        // Animate loader off screen
        $(".se-pre-con").fadeOut("fast");
        $("body").removeClass("preload");
      }, 1);
    });
