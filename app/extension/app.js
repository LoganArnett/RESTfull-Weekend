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



// var startButton = document.querySelector('button#microphone');
// startButton.onclick = function(){
//   chrome.tabs.getCurrent(function() {
//   console.log(chrome.tabs);
//   return false;
//   });
// };

document.addEventListener('DOMContentLoaded', function() {
  var submit = document.getElementById('submit');
  submit.addEventListener('click', function(){
      var newURL = "http://lmgtfy.com/?q=" + $('#question').val();
      chrome.tabs.create({ url: newURL });
      return false;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var currentTab = document.getElementById('microphone');
  currentTab.addEventListener('click', function(){
    chrome.tabs.create({ url: 'http://www.sanity.com'});
  });
});

