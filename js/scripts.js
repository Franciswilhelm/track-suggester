var biz = "C+";
var bizcasual = "PHP";
var casual = "Ruby";


$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    var clothes = $("input:radio[name=clothes]:checked").val();
    var company = $("input:radio[name=company]:checked").val();
    var letter = $("input:radio[name=letter]:checked").val();
    var device = $("input:radio[name=device]:checked").val();
    var result;
    if (clothes === "business" || company === "big") {
      result = "C+";
    } else if (clothes === "businesscasual" || company === "website") {
      result = "Php";
    } else if (clothes === "casual" || company === "startup" && letter === "r" || device === "app" ) {
      result = "Ruby";
    }
    $("#output").text(result);
  });
});
