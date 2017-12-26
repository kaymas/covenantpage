$(window).on('load',function(){
  var selected = "navli1";
  var main = $(".navul");
  $('a').on('click',function(){
    var beforewidth = $(this).parent().outerWidth();
    main.children().removeClass('hovered');
    $(this).parent().addClass('hovered');
    document.styleSheets[0].addRule('li.hovered::before','width: '+beforewidth+'px;');
  });
});
