
$(document).ready(function(){
  var allSelects = document.getElementsByTagName("p");
  var lastSelect = allSelects[allSelects.length-1];
  lastSelect.focus();

    $("#main_container").click(function(){

      lastSelect.focus();

});
});

$(document).keypress(function(e) {
    if(e.which == 13) {
      var allSelects = document.getElementsByTagName("span");
      var pselects = document.getElementsByClassName("single-line") ;
      var lastpselect = pselects[pselects.length-1];
      var lastSelect = allSelects[allSelects.length-1];
      $(lastSelect).remove();
      $(lastpselect).remove();

      var element = "<div class=\"remove\" style=\"margin-top:20;\">C:\\Person\\Information&gt  <p class=\"single-line\" id=\"input\" contenteditable=\"true\"></p> <span class=\"blink_me\">_</span></div>"
        $( ".new_container" ).append( element );
        allSelects = document.getElementsByTagName("p");
        lastSelect = allSelects[allSelects.length-1];
        lastSelect.focus();
    }
    if(e.which == 113){
      $(".remove").remove();

    }
});




//var allSelects = document.getElementsByTagName("p");
//var lastSelect = allSelects[allSelects.length-1];
