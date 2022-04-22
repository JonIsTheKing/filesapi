$(document).ready(function(){
    $('.option').on('click', function(){
      var hh = $(this).parent().data('key');
      console.log($(this).parent().data('key'));

      if($(this).hasClass(hh)) {
        $(this).css({'background-color':'#4CAF50', 'color':'#eeeeee'});
        $(this ).siblings().off('click');
      } else {
        $(this).css({'background-color':'#f70d1a', 'color':'white'});
        $(this).removeClass('f');
      }
    })
  });
