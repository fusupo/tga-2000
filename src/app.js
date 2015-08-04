$(document).ready(function() {


  $('#airHorn').click(function() {
    $("<audio></audio>").attr({ 
      'src':'audio/airHorn_1.mp3', 
      'autoplay':'autoplay'
    })
  })

  $('#siren').click(function() {
    $("<audio></audio>").attr({ 
      'src':'audio/siren.mp3', 
      'autoplay':'autoplay'
    })
  })

  $('#explosion').click(function() {
    $("<audio></audio>").attr({ 
      'src':'audio/explosion.mp3', 
      'autoplay':'autoplay'
    })
  })

  $('#needle').click(function() {
    $("<audio></audio>").attr({ 
      'src':'audio/needle.mp3', 
      'autoplay':'autoplay'
    })
  })

});
