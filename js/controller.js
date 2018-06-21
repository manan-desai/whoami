
$(document).ready(function(){
  $( ".new_container" ).append( element );

    last_select(".single-line").focus();
    $("#main_container").click(function(){
      last_select("p").focus();
});
});
var element = "<div class=\"remove\" style=\"margin-top:20;\">C:\\Person\\Information&gt  <p class=\"single-line\" id=\"input\" contenteditable=\"true\"></p> <span class=\"blink_me\">_</span></div>"
$(document).keypress(function(e) {
    if(e.which == 13) {
      var p_value = $(last_select(".single-line")).text();
      $(last_select(".blink_me")).remove();
      $(last_select(".single-line")).remove();
      $( ".new_container" ).append( element );
        last_select(".single-line").focus();
        commands(p_value);

    }
});

function last_select(select){
  if(select[0]=="."){
  var allSelects = document.getElementsByClassName(select.slice(1));
}
else{
  var allSelects = document.getElementsByTagName(select);
}
  return allSelects[allSelects.length-1];
}

var ob = {
  firstname:"manan",
  lastname:"desai",
  study:{
    college:"bapu",
    hsc:"r.c patel",
    ssc:"c.m patel"
  }
}

function commands(value){
  var values = value.split(" ");

  if(value=="clear"){
    $(".remove").remove();
    $( ".new_container" ).append( element );
    last_select("p").focus();
  }
  else if(typeof(ob[values[0]])=="string"){
    alert(ob[values[0]]);
  }

  else if(typeof(ob[values[0]])=="object"){               //if obj
    if(typeof(ob[values[0]][values[1]])=="string"){
      alert(ob[values[0]][values[1]]);
    }
    else {
      alert(Object.keys(ob[values[0]]))
    }
  }

  else if(value==""){
  }

  else{
    alert(Object.keys(ob))
 }



}


//var allSelects = document.getElementsByTagName("p");
//var lastSelect = allSelects[allSelects.length-1];
