$(document).ready(function () {
  var jsonURL = "gallery.json";
  $.getJSON(jsonURL, function (json)
  {
    var imgList= "";
    $.each(json.products, function () {
      imgList += '<li><img src= "' + this.imgPath + '"></li>';
    });
   $('#jsonImages').append(imgList);
  });
});
