var container = document.getElementById("popup-container");
var popupview = document.getElementById("popup-image");
var popupImage = document.getElementById("full-view");
var popupButtons = document.getElementById("popup-buttons");
var popupInfo = document.getElementById("popup-info");
var downloadButton = document.getElementById("download-button");

function popup(img, src) {
  container.style.display = "block";
  popupImage.src = src;
  popupImage.style.margin = "-" + popupImage.clientHeight / 2 + "px -" + popupImage.clientWidth / 2 + "px";
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  popupButtons.style.left = x/2 + popupImage.width/2 + "px";
  popupButtons.style.top = y/2 - popupImage.height/2 + "px";
  popupInfo.style.left = x/2 - popupImage.width/2 + "px";
  popupInfo.style.top = y/2 + popupImage.height/2 + "px";
  popupInfo.style.width = popupImage.width;
  downloadButton.href = popupImage.src;
}



window.onclick = function(e){

  if(e.target == container){
    container.style.display = "none";

  }
}