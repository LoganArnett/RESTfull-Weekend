/* Davidbot app.js */

document.addEventListener('DOMContentLoaded', function() {
  var submit = document.getElementById('submit');
  submit.addEventListener('click', function(){
      var newURL = "http://lmgtfy.com/?q=" + $('#question').val();
      chrome.tabs.create({ url: newURL });
      return false;
  });
});

var apiBase = 'http://api.hipchat.com/v2/room/997292/notification?auth_token='
var auth_token = 'Q41fTsyF67bt2ak98JmS4BKzP0VX0SNBApqbWvLB'

document.addEventListener('DOMContentLoaded', function() {
  var linkToShare = '';
  var currentTab = document.getElementById('hipchat');
  currentTab.addEventListener('click', function(){
    event.preventDefault();
      event.preventDefault();
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      $.ajax({
        type: 'POST',
        url: apiBase + auth_token,
        data: JSON.stringify({
          'message' : "One of your classmates found this site helpful and wanted to share it with you! " + tabs[0].url,
          'color'   : 'purple',
          "message_format" : 'text'
        }),
        error: function(e){
          console.log(e);
        },
        dataType: "json",
        contentType: "application/json"
        });
      });
    return false;
  });
});


$("#hat").on('click', function(){
  $('#davidHat').toggleClass('hidden')
  });
