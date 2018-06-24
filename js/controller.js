
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


      commands(p_value);

        last_select(".single-line").focus();


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
  about:{
  firstname:"my firstname is Manan",
  lastname:"my lastname is Desai",
  fullname:"my fullname is Manan Desai",
  age:"i am"+calculate_age(new Date(1996, 10, 8))+" years old",
  birthday:"my birth date is 08/10/1996"
},
  study:{
    college:"i completed Bachelor of Engneering in computer from svbit college ",
    graduationyear:"my graduation year is 2018",
    hsc:"i have done science from r.c patel school",
    ssc:"i have done 10th from c.m patel"
  },
  social:{
    get facebook() { redirect("www.facebook.com/manan5439") },
    get twitter() {redirect("twitter.com/manan5439")},
    get insta() {redirect("www.instagram.com/manan5439")},
    get stackoverflow() {redirect("stackoverflow.com/users/9918920/manan5439")},
    get github() {redirect("github.com/manan5439")}

  }
};


function commands(value){
  var values = value.split(" ");
if(typeof(ob[values[0]])=="string"){

$( ".new_container" ).append( "<div class=\"remove\"></br> Hello, "+ob[values[0]]+"</div>" );
  }

  else if(typeof(ob[values[0]])=="object"){               //if obj
    if(typeof(ob[values[0]][values[1]])=="string"){
      $( ".new_container" ).append( "<div class=\"remove\"></br> Hello, "+ob[values[0]][values[1]]+".</div>" );
    }
  }

  else if(values.length==1 && values[0]=="help"){                 //for command help
    var help = "";

    for (var key in ob) {
    // skip loop if the property is from prototype
    if (!ob.hasOwnProperty(key)) continue;
    var obj = ob[key];
    help += "</br>"
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if(!obj.hasOwnProperty(prop)) continue;

        help += " ---) \""+key+" "+prop+"\"</br>"

    }
}
      help += "</br> use  \"clear\" for clearing prompt</br>"
    $( ".new_container" ).append( "<div class=\"remove\"></br> use following commands: "+help+"</div>" );
    help = ""
}

  else{
$( ".new_container" ).append( "<div class=\"remove\"></br> Command not found. </br></br> Sorry \"" +values[0] +"\" is a wrong input.  Type help for more info</div>" );

 }

 if(value=="clear"){
   $(".remove").remove();
   $( ".new_container" ).append( element );
   last_select("p").focus();
 }
 else{
   $( ".new_container" ).append( element );
 }

}

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970).toString();
}
 function redirect(url){
   window.location = "https://"+url;
 }

//var allSelects = document.getElementsByTagName("p");
//var lastSelect = allSelects[allSelects.length-1];
