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
  }
}