$(document).ready(function() {
  $("form#code-lang").submit(function(event) {

    const musicStr = $("select#music").val();
    const music = parseInt(musicStr);

    const movieStr = $("select#movie").val();
    const movie = parseInt(movieStr);

    const careerStr = $("select#career").val();
    const career = parseInt(careerStr);

    const quoteStr = $("select#quote").val();
    const quote = parseInt(quoteStr);

    const result = music + movie + career + quote;

    if (result <= 5) {
      $("#python").show()
      $("#ruby").hide()
      $("#javascript").hide()
      $("#go").hide()
    } else if (result > 5 && result <= 10) {
      $("#ruby").show()
      $("#python").hide()
      $("#javascript").hide()
      $("#go").hide()
    } else if (result > 10 && result <= 15) {
      $("#javascript").show()
      $("#python").hide()
      $("#ruby").hide()
      $("#go").hide()
    } else if (result > 15 && result <= 20) {
      $("#go").show()
      $("python").hide()
      $("#ruby").hide()
      $("#javascript").hide()
    }
    event.preventDefault();
  });
});