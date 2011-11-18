$(document).ready (function () {
  var page = $('<div class=page />');
  $("body").wrapInner (page);
  page = $("body :first");

  /* fancy stuff */

  $("html").css ({ 'background-color': '#eceaef' })
  page.css ({
    'background-color': '#fefefe',
    'margin': '50px',
    'margin-top': '50px',
    'box-shadow': '5px 5px 20px gray'
  });
});

