var biz = "C+";
var bizcasual = "PHP";
var casual = "Ruby";


$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();

    
    $("#output").text(result);
  });
});
