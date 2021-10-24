$(".btn_gnb").click(function() {
  $(".gnb,.gnb_cover,html").addClass("open");
  window.location.hash = "#open";
});

window.onhashchange = function() {
  if (location.hash != "#open") {
    $(".gnb,.gnb_cover,html").removeClass("open");
  }
};