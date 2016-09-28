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

function openVidCard(number) {
  $("#video-" + number)[0].src += "&autoplay=1";
    ev.preventDefault();
}

function closeVidCard(number) {
  setTimeout(function() {
    var url = $("#video-" + number).attr('src');
    $("#video-" + number).attr('src', '');
    url = url.replace('&autoplay=1','');
    $("#video-" + number).attr('src', url);
  }, 800);
}
