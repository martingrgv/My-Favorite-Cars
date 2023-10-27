$(document).ready(function () {
  let index = 0;
  let isForward = false;
  let carsLength = $(".cars").length;
  $("#btn-prev").click(function () {
    index--;
    isForward = false;
    if (index < 0) {
      index = carsLength - 1;
    }

    changeImg(index, isForward);
  });
  $("#btn-next").click(function () {
    index++;
    isForward = true;
    if (index >= carsLength) {
      index = 0;
    }

    changeImg(index, isForward);
  });

  function changeImg(index, isForward) {
    let growClass = "col-lg-3 col-md-4 col-sm-5";
    let shrinkClass = "col-lg-2 col-md-2 col-sm 2";

    if (isForward) {
      $(".cars")
        .eq(index - 1)
        .removeClass(growClass)
        .addClass(shrinkClass);
      $(".cars").eq(index).removeClass(shrinkClass).addClass(growClass);

      $(".brand-title")
        .eq(index - 1)
        .removeClass("d-block")
        .addClass("d-none");
      $(".brand-title").eq(index).removeClass("d-none").addClass("d-block");
      $(".brand-info")
        .eq(index - 1)
        .removeClass("d-block")
        .addClass("d-none");
      $(".brand-info").eq(index).removeClass("d-none").addClass("d-block");
    } else {
      if (index >= carsLength - 1) {
        $(".cars").eq(0).removeClass(growClass).addClass(shrinkClass);
        $(".cars").eq(index).removeClass(shrinkClass).addClass(growClass);

        $(".brand-title").eq(0).removeClass("d-block").addClass("d-none");
        $(".brand-title").eq(index).removeClass("d-none").addClass("d-block");
        $(".brand-info").eq(0).removeClass("d-block").addClass("d-none");
        $(".brand-info").eq(index).removeClass("d-none").addClass("d-block");
      } else {
        $(".cars")
          .eq(index + 1)
          .removeClass(growClass)
          .addClass(shrinkClass);
        $(".cars").eq(index).removeClass(shrinkClass).addClass(growClass);

        $(".brand-title")
          .eq(index + 1)
          .removeClass("d-block")
          .addClass("d-none");
        $(".brand-title").eq(index).removeClass("d-none").addClass("d-block");
        $(".brand-info")
          .eq(index + 1)
          .removeClass("d-block")
          .addClass("d-none");
        $(".brand-info").eq(index).removeClass("d-none").addClass("d-block");
      }
    }
  }
});
