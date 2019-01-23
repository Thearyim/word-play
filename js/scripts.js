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

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#sentence1").val();
    var words = userInput.split('[1]');

     $("#result").append(userInput);

    return words;

});


    // $(".result").show();

  });
