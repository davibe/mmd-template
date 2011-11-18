$(document).ready (function () {
  var html = $("html");
  html.css ({
    "background-color": "#f0f0f0",
  });
  var page = $(".page");
  page.hide ();
  page.css ({
    "background-color": "white",
    "box-shadow": "1px 5px 10px 0px #aaa",
    "margin-top": "3em",
    "margin-left": "4em",
    "width": "22em",
    "padding": "30px"
  });
  page.fadeIn ();
});

