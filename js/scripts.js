$(document).ready(function(){

  $("#form-container form").submit(function(event) {
    var fields = ["activity", "farToTravel", "afterExplore", "food", "cocktails"];
    var userAnswer = 0;

    fields.forEach(function(field) {
      userAnswer += parseInt($("select#" + field).val());
    });

    if (userAnswer <= 5 ) {
      $("#whistler").fadeIn();
      $("#anotherSuggestion").show();
      $(this).remove();
    }
    else if (userAnswer >= 6 && userAnswer <= 13) {
        $("#shasta").fadeIn();
        $("#anotherSuggestion").show();
        $(this).remove();
    }
    else if (userAnswer >= 14 && userAnswer <= 16) {
        $("#london").fadeIn();
        $("#anotherSuggestion").show();
        $(this).remove();
    }
    else {
      $("#thailand").fadeIn();
      $("#anotherSuggestion").show();
      $(this).remove();
    }

    event.preventDefault();
  });
});
