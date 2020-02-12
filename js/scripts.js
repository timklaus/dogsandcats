$(document).ready(function() {
  $("#dogpicture").click(function(){
    $("ul#animalNoises").prepend("<li>WOOF!</li>");
  });
  $("#catpicture").click(function(){
    $("ul#animalNoises").prepend("<li>MEOW!</li>");
  });
});