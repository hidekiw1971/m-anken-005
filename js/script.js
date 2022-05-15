jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // start

  // card1
  $(".card__attention1").hover(
    function () {
      $(".card__title--attention1").css("color", "#fff");
      $(".card__text--attention1").css("color", "#fff");
      $(".card__category--attention1").css("color", "#fff");
      $(".card__date--attention1").css("color", "#fff");
      $(".card__img1").css("transform", "scale(1.1)");
      $(".card__img1").css("transition", "0.1s");
      $(".card__contents--attention1").css("background-color", "#333");
    },
    function () {
      // マウスアウト時の処理
      // $(".card__attention1").remove();
      $(".card__title--attention1").css("color", "#333");
      $(".card__text--attention1").css("color", "#333");
      $(".card__category--attention1").css("color", "#333");
      $(".card__date--attention1").css("color", "#333");
      $(".card__img1").css("transform", "scale(1.0)");
      $(".card__img1").css("transition", "0.1s");
      $(".card__contents--attention1").css("background-color", "#fff");
    }
  );
  // .card1

  // card2
  $(".card__attention2").hover(
    function () {
      $(".card__title--attention2").css("color", "#fff");
      $(".card__text--attention2").css("color", "#fff");
      $(".card__category--attention2").css("color", "#fff");
      $(".card__date--attention2").css("color", "#fff");
      $(".card__img2").css("transform", "scale(1.1)");
      $(".card__img2").css("transition", "0.1s");
      $(".card__contents--attention2").css("background-color", "#333");
    },
    function () {
      // マウスアウト時の処理
      // $(".card__attention1").remove();
      $(".card__title--attention2").css("color", "#333");
      $(".card__text--attention2").css("color", "#333");
      $(".card__category--attention2").css("color", "#333");
      $(".card__date--attention2").css("color", "#333");
      $(".card__img2").css("transform", "scale(1.0)");
      $(".card__img2").css("transition", "0.1s");
      $(".card__contents--attention2").css("background-color", "#fff");
    }
  );
  // .card2

  // card3
  $(".card__attention3").hover(
    function () {
      $(".card__title--attention3").css("color", "#fff");
      $(".card__text--attention3").css("color", "#fff");
      $(".card__category--attention3").css("color", "#fff");
      $(".card__date--attention3").css("color", "#fff");
      $(".card__img3").css("transform", "scale(1.1)");
      $(".card__img3").css("transition", "0.1s");
      $(".card__contents--attention3").css("background-color", "#333");
    },
    function () {
      // マウスアウト時の処理
      // $(".card__attention1").remove();
      $(".card__title--attention3").css("color", "#333");
      $(".card__text--attention3").css("color", "#333");
      $(".card__category--attention3").css("color", "#333");
      $(".card__date--attention3").css("color", "#333");
      $(".card__img3").css("transform", "scale(1.0)");
      $(".card__img3").css("transition", "0.1s");
      $(".card__contents--attention3").css("background-color", "#fff");
    }
  );
  // .card3

  // end
});
