$(document).ready(function() {
    $( "#social a" ).each(function() {
      var tipt = $(this).attr('title');
      $(this).attr('title','');
      $(this).append('<span>');
      $(this).children('span').text(tipt);
      var spanWidth = $(this).children('span').width() + 20;
      var spanMarg = 0 - spanWidth/2;
      $(this).children('span').css('width',spanWidth);
      $(this).children('span').css('margin-left',spanMarg);
      $(this).hover (
        function() {
          $(this).children('span').fadeIn();
          $('#social a').css('opacity','.1');
          $(this).css('opacity','1');
        }, function() {
          $(this).children('span').fadeOut();
          $('#social a').css('opacity','1');
        }
      );
    });
    
    $(".to-top").hide();

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".to-top").fadeIn("300");
        }else{
            $(".to-top").fadeOut("300");
        }
    });
  
    $(".to-top").click(function(){
        $("body, html").animate({
          scrollTop: 0
        }, 150);
    });
  });

