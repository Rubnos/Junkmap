// Or with jQuery

$(document).ready(function(){
  $('.sidenav').sidenav();
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
});

// Or with jQuery

$(document).ready(function(){
  $('select').formSelect();
});


// Select
$(document).ready(function(){

  $("select").change(function(){

    $(this).find("option:selected").each(function(){

      var optionValue = $(this).attr("value");

      if(optionValue){

        $(".box").not("." + optionValue).hide();

        $("." + optionValue).show();

      } else{

        $(".box").hide();

      }

    });

  }).change();

});
