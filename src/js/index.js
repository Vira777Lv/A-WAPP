$(document).ready(function(){
  $('.carousel').slick({
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $(".fa-search").click(function(){
    $(".search-input").fadeToggle();
  });
  $(".burger").click(function(){
    $(".main-menu").slideToggle("slow");
  });
});
