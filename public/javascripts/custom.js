function playCard(number) {
  var id = ""
  var thumb = ""
  id = "video-card-" + number
  thumb = "card-thumb-" + number
  document.getElementById(thumb).style.display = "none";
  document.getElementById(id).play();
}

function pauzeCard(number){
  var id = ""
  id = "video-card-" + number
  document.getElementById(id).pause();
}
