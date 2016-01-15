$(document).ready(function(){

  $("#blanks form").submit(function(event) {
    var blanksArray = ["activity", "farToTravel", "afterExplore", "food", "cocktails"];
    var userAnswer = 0;

    blanksArray.forEach(function(blank) {
      userAnswer += parseInt($("select#" + blank).val());
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
