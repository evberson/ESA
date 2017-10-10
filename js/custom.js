//Selects a random background, with a double chance of hitting the owl because
//the owl is the best
function loadBackground() {
  var numBackgrounds = 23;
  var num = Math.ceil( Math.random() * (numBackgrounds+1) );
  if(num > numBackgrounds){
    num = 15;
  }
  document.body.background = 'images/bg/img'+num+'.jpg';
  document.body.style.backgroundSize = "cover";// Background repeat
}

//Opens navigation bar
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("navbars").style.display ="none";
}

//Closes navigation bar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("navbars").style.display ="block";
}

//Hides all of the div sections
function hideAll(){
  document.getElementById("landing").style.opacity = 0.0;
  document.getElementById("about").style.display ="none";
  document.getElementById("initiatives").style.display ="none";
  document.getElementById("eboard").style.display ="none";
  document.getElementById("partners").style.display ="none";
  document.getElementById("members").style.display ="none";
  document.getElementById("newsletter").style.display ="none";
  document.getElementById("contact").style.display ="none";
  document.getElementById("events").style.display ="none";
  document.getElementById("applications").style.display ="none";
}

function showHome(){
  closeNav();
  hideAll();
  document.getElementById("landing").style.opacity = 1;
}

//Shows only the about div
function showAbout(){
  closeNav();
  hideAll();
  document.getElementById("about").style.display ="block";
}

//Shows only the initiatives div
function showInitiatives(){
  closeNav();
  hideAll();
  document.getElementById("initiatives").style.display ="block";
}


//Shows only the applications div
function showApplications(){
  closeNav();
  hideAll();
  document.getElementById("applications").style.display ="block";
}

//Shows only the eboard div
function showEBoard(){
  closeNav();
  hideAll();
  document.getElementById("eboard").style.display ="block";
}

//Shows only the partners div
function showPartners(){
  closeNav();
  hideAll();
  document.getElementById("partners").style.display ="block";
}

//Shows only the members div
function showMembers(){
  closeNav();
  hideAll();
  document.getElementById("members").style.display ="block";
}

//Shows only the newsletter div
function showNewsletter(){
  closeNav();
  hideAll();
  document.getElementById("newsletter").style.display ="block";
}

//Shows only the contact div
function showContact(){
  closeNav();
  hideAll();
  document.getElementById("contact").style.display ="block";
}

//Shows only the events div
function showEvents(){
  closeNav();
  hideAll();
  document.getElementById("events").style.display ="block";
}

//Removes the preloader screen upon full page load
$(window).load(function() {
  setTimeout(function(){
    // Animate loader off screen
    $(".se-pre-con").fadeOut("fast");
    $("body").removeClass("preload");
  }, 1);
});

//Set the background upon loading page
loadBackground();

//auto expand textarea
function adjust_textarea(h) {
  h.style.height = "20px";
  h.style.height = (h.scrollHeight)+"px";
}

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

document.getElementById("iframefb").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpg%2Fuscesa%2Fevents%2F&tabs=events%2C%20timeline&width="+ Math.floor(Math.min(width*.75,500)) +"&height="+ Math.floor(height*.5) +"&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1345235075557715";

document.getElementById("iframefb").style.width = Math.min(width*.75,500);
document.getElementById("iframefb").style.height = height*.5;
