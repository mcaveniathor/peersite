$(document).ready(function(){
  $(window).scroll(function (event) {
    if($("#second-nav").hasClass("navbar-fixed-top"))
    {
      if($(window).scrollTop() < $(".jumbotron").height() + 65)
      {
        $("#second-nav").removeClass("navbar-fixed-top");
        $("#mainquote").css("margin-top", "0px");
      }
    }
    else {
      if($(window).scrollTop() >= $(".jumbotron").height() + 65)
      {
        $("#second-nav").addClass("navbar-fixed-top");
        $
        $("#mainquote").css("margin-top", "70px");
      }
    }
  });
});
