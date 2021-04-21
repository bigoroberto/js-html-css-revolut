$(function(){

  $(document).on('click', '.header-r ul .with-dropdown > a', function(){

    $(this).next().toggleClass('active')
    
  });

});