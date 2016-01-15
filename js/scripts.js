$(document).ready(function(){

  $("#form-container form").submit(function(event) {
    var fields = ["activity", "farToTravel", "afterExplore", "food", "cocktails"];
    var userAnswer = 0;

    fields.forEach(function(field) {
      userAnswer += parseInt($("select#" + field).val());
    });

    if (userAnswer <= 5 ) {
      $("#whistler").show();
      $("#anotherSuggestion").show();
      $(this).remove();
    }
    else if (userAnswer >= 6 && userAnswer <= 10) {
        $("#shasta").show();
        $("#anotherSuggestion").show();
        $(this).remove();
    }
    else if (userAnswer >= 11 && userAnswer <= 16) {
        $("#london").show();
        $("#anotherSuggestion").show();
        $(this).remove();
    }
    else {
      $("#thailand").show();
      $("#anotherSuggestion").show();
      $(this).remove();
    }

    event.preventDefault();
  });
});
