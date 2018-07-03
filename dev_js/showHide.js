$(window).load(function(){   
    var currentDate = Date.now();
    $(".showAtDate").each(function() {
      var specifiedDateLimit = $(this).data('limit');
      var date = Date.parse(specifiedDateLimit);
      if(!isNaN(date) && currentDate - date < 0) {
        $(this).show();
      }
    });
 
});  