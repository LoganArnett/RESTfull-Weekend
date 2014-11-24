/* Davidbot app.js */

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = function(event) {
  var results = event.results;
  // results is an array of SpeechRecognitionResults
  // each of which is an array of SpeechRecognitionAlternatives
  // in this demo, we only use the first alternative
  var interimTranscript = '';
  for (var i = event.resultIndex; i != results.length; ++i) {
    var result = results[i];
    // once speaking/recognition stops, a SpeechRecognitionEvent
    // is fired with a single result, for which isFinal is true
    if (result.isFinal) {
      $('#question').val(results[0][0].transcript)
      recognition.stop();
      return;
    } else {
      interimTranscript += result[0].transcript;
      $('#question').val(interimTranscript);
    }
  }
  
}

recognition.onend = function(event) {
  console.log('Recognition ended.');
}
recognition.onerror = function(event) {
  console.log('Error: ' + event.error);
}

var startButton = document.querySelector('button#microphone');
startButton.onclick = function(){
  recognition.start();
  return false;
}

// $("#bingit").attr('src', "http://letmebingthatforyou.com/?q=" + searchFinal );
$('#submit').on('click', function(){
  var searchFinal = $('#question').val().replace(/\s+/g, '%20');
  $('#bingit').toggle().attr('src',  "http://letmebingthatforyou.com/?q=" + searchFinal );
  $('#david').css({'margin': 0}).animate({'margin-left': -350, 'margin-top': -40,'margin-bottom': 30, 'width' : 125}, 1000);
  $('figcaption').css({'margin-left': 0, 'display': 'inline-block'}).animate({'width' : 200}, 1500);
  $('.davidbot').css({'position': 'absolute'});
  return false;
})
