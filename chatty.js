var Chatty = (function () {

  return {
    getPreFill: function (callBack) {
      var xhr = new XMLHttpRequest()
        xhr.open('GET', 'messages.json')
        xhr.addEventListener('load', function(event) {
          var preFill = JSON.parse(event.target.responseText)
          callBack(preFill)
        })
      xhr.send()
    }
  }
})();

function showPreFill (messages) {
  var list = document.querySelector('.outputField')
  messages.forEach(function (message) {
    list.innerHTML += `<span class="messageOutput">${message}</span><button class="delete">Delete</button><br>`
  })
}
Chatty.getPreFill(showPreFill);