$(document).ready(function() {
  let count = 5;
  let $container = $("<div class='container'></div>");

  for (let i = 0; i < count; i++) {
    let $div = $("<div class='content'></div>");
    let $btn = $("<button> button " + (i + 1) + "</button>");
    let $txt = $("<p>this is No. " + (i + 1) + "div </p>");

    $div.append($btn);
    $div.append($txt);

    $container.append($div);
  }

  $("body").append($container);

  $(".content").on('click', 'button', function() {
    // console.log($(this));
    $(this).next().fadeToggle();
  });
});
