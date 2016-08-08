$(window).on("load", function() {
  $("#G8_map1 > li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents div").hide(); // 二つの要素を非表示にする
    $("." + this.id).show(); // クリックされたボタンに対応する要素を表示する
  });

  $("#G8_map2 > li").on("click", function() {
    $("#G8_map2 > li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents_kanri div").hide(); // 二つの要素を非表示にする
    $("." + this.id).show(); // クリックされたボタンに対応する要素を表示する
  });
});