$(document).ready(function () {
  var now = new Date();
  var year = now.getFullYear();
  var mon =
    now.getMonth() + 1 > 9
      ? "" + (now.getMonth() + 1)
      : "0" + (now.getMonth() + 1);
  var day = now.getDate() > 9 ? "" + now.getDate() : "0" + now.getDate();
  //년도 selectbox만들기
  for (var i = 1900; i <= year; i++) {
    $("#birth_yyyy").append('<option value="' + i + '">' + i + "년</option>");
  }

  // 월별 selectbox 만들기
  for (var i = 1; i <= 12; i++) {
    var mm = i > 9 ? i : "0" + i;
    $("#birth_mm").append('<option value="' + mm + '">' + mm + "월</option>");
  }

  // 일별 selectbox 만들기
  for (var i = 1; i <= 31; i++) {
    var dd = i > 9 ? i : "0" + i;
    $("#birth_dd").append('<option value="' + dd + '">' + dd + "일</option>");
  }
  $("#birth_yyyy  > option[value=" + year + "]").attr("selected", "true");
  $("#birth_mm  > option[value=" + mon + "]").attr("selected", "true");
  $("#birth_day  > option[value=" + day + "]").attr("selected", "true");
});

// staff slide
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
