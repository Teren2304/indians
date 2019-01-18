var $menu = $(".nav");
function checkNav(){
  if ($(this).scrollTop() > 10 && $menu.hasClass("nav--default") ){
    $menu.fadeOut('fast', function(){
      $(this).removeClass("nav--default").addClass("nav--fixed").fadeIn('fast');
    });
  } 
  else if($(this).scrollTop() <= 10 && $menu.hasClass("nav--fixed")) {
    $menu.fadeOut('fast', function(){
      $(this).removeClass("nav--fixed").addClass("nav--default").fadeIn('fast');
    });
  }
}
$(window).scroll(function(){
  checkNav();
});
checkNav();