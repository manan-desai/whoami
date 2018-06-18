$(document).ready(function(){
    $("#main_container").click(function(){
  var input = $("#input");
  input.focus();
});
});

$(document).keypress(function(e) {
    if(e.which == 13) {
      
      var element = "<div style=\"margin-top:20;\">C:\\Person\\Information&gt  <p id=\"input\" contenteditable=\"true\"></p> <span class=\"blink_me\">_</span></div>"
        $("#cmd_black").after(element);
    }
});



//var allSelects = document.getElementsByTagName("p");  last element
//var lastSelect = allSelects[allSelects.length-1];
