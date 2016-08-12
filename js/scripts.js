var biz = "C+";
var bizcasual = "PHP";
var casual = "Ruby";


$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    var clothes = $("input:radio[name=clothes]:checked").val();
    var result;
    if (clothes === "business") {
      result = "C+";
    } else if (clothes === "businesscasual") {
      result = "Php";
    } else if (clothes === "casual") {
      result = "Ruby";
    }
    $("#output").text(result);
  });
});
