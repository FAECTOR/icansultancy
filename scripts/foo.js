$(window).resize(function() {
    var container_width = $('#pageContainer').width();
    $('#pageContainer').html('<div class="fb-page" data-href="https://www.facebook.com/barefootfitnessnl" data-width="' + container_width + '" data-height="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/barefootfitnessnl"><a href="https://www.facebook.com/barefootfitnessnl">BarefootFitness</a></blockquote></div></div>');
    FB.XFBML.parse();
});

jQuery(function($) {

    $(".tocal").click(function() {
        $('html, body').animate({
            scrollTop: $(".front-agenda").offset().top - 100
        }, 800);
    });

});

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).load(function() {
  equalheight('.gcf-item-block');
});


$(window).resize(function(){
  equalheight('.gcf-item-block');
});
