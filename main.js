
var nav = document.getElementById('test');

window.onscroll = function () {
  if (window.pageYOffset > 900) {
    nav.style.background = "#8ac6d1";

  }
  else {
    nav.style.background = "transparent";

  }
}
/*this is  the jquery code*/
$(function () {

  var Ourcountdown = setInterval(function () {

    var date = new Date();
    var h = date.getHours();//0-23
    var s = date.getSeconds();//0-59
    var m = date.getMinutes();//0-59
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("countdown").innerText = time;

  })

}, 1000)


