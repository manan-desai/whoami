
$(document).ready(function(){
  typeWriter("Hello i am a program which developed by owner of this site. What would you like to know about owner of this site.</br> </br>Type \"help\" for more Info.");

    $("#main_container").click(function(){
      last_select("p").focus();
});
});
var element = "<div class=\"remove\" style=\"margin-top:20;\">C:\\Person\\Information&gt  <p class=\"single-line \" id=\"input\" contenteditable=\"true\"></p> <span class=\"blink_me\">_</span></div>"
$(document).keypress(function(e) {
    if(e.which == 13) {
      var p_value = $(last_select(".single-line")).text();
      $(last_select(".blink_me")).remove();
      $(last_select(".single-line")).remove();
if(enter){
      commands(p_value);
}


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
  follow:{
    get facebook() { redirect("https://www.facebook.com/manan5439") },
    get twitter() {redirect("https://twitter.com/manan5439")},
    get insta() {redirect("https://www.instagram.com/manan5439")},
    get stackoverflow() {redirect("https://stackoverflow.com/users/9918920/manan5439")},
    get github() {redirect("https://github.com/manan5439")}
  },
  contact:{
    phone:"My phone number is +919722424299",
    email:"My email id is manan5439@yahoo.com",
    address:"my address is </br>H-203,</br>mahalaxmi-2,</br>pethapur,</br>gandhinagar-382610"
  }
};


function commands(value){
  var values = value.toLowerCase().split(" ");
if(typeof(ob[values[0]])=="string"){

typeWriter("</br> Hello, "+ob[values[0]],20);
  }

  else if(typeof(ob[values[0]])=="object"){               //if obj
    if(typeof(ob[values[0]][values[1]])=="string"){
      typeWriter("Hello, "+ob[values[0]][values[1]],20)
    }
  }

  else if(values.length==1 && values[0]=="help"){                 //for command help
    var help = "";

    for (var key in ob) {
    // skip loop if the property is from prototype
    if (!ob.hasOwnProperty(key)) continue;
    var obj = ob[key];
    help += " </br> "
    for (var prop in obj) {
        // skip loop if the property is from prototype
        if(!obj.hasOwnProperty(prop)) continue;

        help += " ---) \""+key+" "+prop+"\" </br> "

    }
}
      help += "</br> use  \"clear\" for clearing prompt</br>"
      typeWriter("</br> use following commands: "+help,50);
    help = ""
}
else if(value=="clear"){
   $(".remove").remove();
 }

  else{


typeWriter("</br> Command not found. </br> your input \"" +values[0] +"\" is not recognized.  Type help for more info",20);
 }



}

function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970).toString();
}
 function redirect(url){
  typeWriter("</br>redirecting to  "+ url,10 )
   window.location = url;
 }


 /**function typeWriter(txt) {
   var i = 0;
   var speed = 60;
   var index ;
     setInterval(function(){
        if (i < txt.length) {
          index = txt.indexOf("</br>");
          if(index==i){
            txt = txt.slice(index+5);
            i=0;
            $( ".text" ).append('</br>');

        }

       $( ".text" ).append(txt.charAt(i))  ;
       i++;
     }
     else{
       clearInterval(animation);
     }
     alert(speed)
     }, speed);
 }**/

var enter;
function typeWriter(txt,speed){
  var i = 0;
  var index ;
  enter = false;
    var f=()=> {
  
if(!enter){
   if (i < txt.length) {
     index = txt.indexOf("</br>");
     if(index==i){
       txt = txt.slice(index+5);
       i=0;
       $( ".anime" ).append('</br>');
}
     $( ".anime" ).append(txt.charAt(i))  ;
     i++;
     setTimeout(f, speed);
     }
     else{
       $("div").removeClass("anime");

       $( ".new_container" ).append( element );

             last_select(".single-line").focus();
             enter = true
             $( ".new_container" ).append( "<div class=\"remove anime\"></div>" );
     }
    }
    else{
      //speed = -10
      //enter = false
      $( ".anime" ).append(txt.slice(i));
      $("div").removeClass("anime");
      //setTimeout(f, speed);
    }
   }
  f()

  
 }



//var allSelects = document.getElementsByTagName("p");
//var lastSelect = allSelects[allSelects.length-1];
