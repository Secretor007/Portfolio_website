$(".goup").click(function (e) {
  $(document).scrollTop(0);
});
$("#about").click((e) => {
  var y = getPoint(".specialh2");
  $("html, body").animate({ scrollTop: y }, "slow");
});
$("#projects").click((e) => {
  var y = getPoint(".page3");
  $("html, body").animate({ scrollTop: y }, "slow");
});
$("#skills").click((e) => {
  var y = getPoint(".page4");
  $("html, body").animate({ scrollTop: y }, "slow");
});
$("#contact").click((e) => {
  var y = getPoint("footer");
  $("html, body").animate({ scrollTop: y }, "slow");
});
function getPoint(id) {
  let target = document.querySelector(id);
  var y = target.offsetTop;
  return y;
}
