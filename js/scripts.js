// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();
//     var items = ["item1","item2","item3","item4","item5","item6"];
//
//     items.forEach(function(item) {
//       var userInput = $("input#" + item).val();
//       $(".result").append.toUpperCase((userInput));
// });
//     $(".result").show();
//   });
// });

function getNewArray(words) {
  var newArray = [];
  words.forEach(function(word) {
    if(word.length >= 3){
      newArray.push(word);
    }
  });
  return newArray;
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#sentence1").val();
    var words = userInput.split(' ');
    var wordsLongerThan3Char = getNewArray(words);
    var reverse = wordsLongerThan3Char.reverse();
    var output = reverse.join(' ');
     $("#result").text(output);
   });
});
