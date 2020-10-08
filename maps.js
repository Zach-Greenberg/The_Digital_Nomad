

function getMap(location) {
  var MAPQUESTAPIKEY = "ipWxqMlnV7xPDPHRnVjzcd7ohwJoKmU0"
  let mapquestUrl = "https://open.mapquestapi.com/staticmap/v5/map?key=" + MAPQUESTAPIKEY + "&center=" + location + "&size=600,400@2x"
  $("#cityMap").attr("src", mapquestUrl);
}

$(document).ready(function () {
  $("#citySearch").click(function () {
    getMap($("#cityName").val())
  });
});