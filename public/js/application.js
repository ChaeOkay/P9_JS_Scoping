$(document).ready(function() {

  $('.awesomeness_teller').click(function(event){
    var $target = $(event.target).text();
    $('#awesomeness_holder').empty();
    $('#awesomeness_holder').append($target);
  });

  $('.skill_teller').on('click', function(){
    var $url_last = document.URL.split('/')[4];
    $('#skill_holder').empty();
    $('#skill_holder').append($url_last)
  });

  $('.meal_teller').on('click', function(){
    $('#meal_holder').empty();
    $('#meal_holder').append(meal);
  });

});
