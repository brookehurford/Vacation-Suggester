$(document).ready(function(){

  $("#form-container form").submit(function(event) {
    var fields = ["activity", "farToTravel", "afterExplore", "food", "cocktails"];
    var userAnswer = 0;

    fields.forEach(function(field) {
      userAnswer += parseInt($("select#" + field).val());
    });

    if (userAnswer <= 7 ) {
      $("#whistler").show();
    }
    else if (userAnswer >= 8 && userAnswer <= 11) {
        $("#shasta").show();
    }
    else if (userAnswer >= 12 && userAnswer <= 17) {
        $("#london").show();
    }
    else {
      $("#thailand").show();
    }
    event.preventDefault();
  });
});
