var biz = function() {return alert("C+")};
var bizcasual = function() {return alert("PHP")};
var casual = function() {return alert("Ruby")};


$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();

    $("#output").text(result);
  });
});
