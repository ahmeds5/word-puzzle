$(document).ready(function() {

  var vowels = ["a", "e", "i", "o", "u", "y"];

  // var paragraph = $("p#string");
  var paragraph = prompt("give a sentence");
  alert(paragraph);

  var paragraphArray = paragraph.split("");
  alert(paragraphArray);

  for(i=0; i<paragraphArray.length; i++) {
    for(v=0; v<vowels.length; v++) {
      if (paragraphArray[i] === vowels[v]) {
        paragraphArray[i] = "-";
      }
    }
  }
  var newParagraph = paragraphArray.join();
  alert (newParagraph);
});
