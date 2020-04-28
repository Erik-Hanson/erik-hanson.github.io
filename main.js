$(document).ready(function(){
    $(".navLink").click(function(e){
        e.preventDefault(); // e is for event
        var att = $(this).attr("href");
        $('html,body').animate({scrollTop: $(att).offset().top},'slow');
    });
  });