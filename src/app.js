$(document).ready(function() {


  $('#airHorn').click(function() {

    $("<audio></audio>").attr({ 
      'src':'audio/airHorn_1.mp3', 
      'autoplay':'autoplay'
    })

  })

});
