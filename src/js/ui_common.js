$(function () {
  // calendar
  $.datepicker.setDefaults({
    buttonImageOnly: true,
    showOn: "both",
    buttonImage: "../images/btn_calendar.png",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
    regional: ["ko"],
    dateFormat: "yy-mm-dd",
  });
  $("[dataformat='datepic']").datepicker({
    buttonText: "날짜를 선택해주세요.",
  });
  var from = $("[dataformat='from']").datepicker({
    buttonText: "시작날짜를 선택해주세요.",
    onClose: function (selectedDate) {
      var getName = $(this).attr("name");
      $("input[name='" + getName + "'].to").datepicker(
        "option",
        "minDate",
        selectedDate
      );
    },
  });
  var to = $("[dataformat='to']").datepicker({
    buttonText: "종료날짜를 선택해주세요.",
    onClose: function (selectedDate) {
      var getName = $(this).attr("name");
      $("input[name='" + getName + "'].from").datepicker(
        "option",
        "maxDate",
        selectedDate
      );
    },
  });

  // jqgrid
  function jqgridInit() {
    $(".jq-grid").each(function () {
      $(this).setGridWidth($(this).parents(".tbl_wrap").width() - 2);
    });
  }
  $(window).on("resize", function () {
    jqgridInit();
  });

  // mobile gnb
  $(".allMenuOpen").on("click", function (e) {
    e.preventDefault();
    $("#allMenuBox").show(0).attr("tabindex", 0);
    $("#allMenuBox").addClass("active");
  });
  $(".allMenuClose").on("click", function (e) {
    e.preventDefault();
    $("#allMenuBox").hide(0).attr("tabindex", -1);
    $("#allMenuBox").removeClass("active");
  });

  $(".pc_con .gnb > li").on("mouseover", function (e) {
    e.preventDefault();
    $(this).children(".sub").addClass("active");
  });
  $(".pc_con .gnb > li").on("mouseleave", function (e) {
    e.preventDefault();
    $(this).children(".sub").removeClass("active");
  });
  $("#allMenuBox").removeClass("active").attr("tabindex", -1);

  $("#allMenuBox > ul > li").each(function () {
    $(this)
      .children("a")
      .on("click", function (e) {
        if ($(this).siblings().length > 0) {
          e.preventDefault();
          $(this).parent().addClass("active").siblings().removeClass("active");
        }
      });
  });
  $("#allMenuBox > ul > li > a").each(function () {
    if (!$(this).next().length) {
      $(this).addClass("empty");
    }
  })
});
