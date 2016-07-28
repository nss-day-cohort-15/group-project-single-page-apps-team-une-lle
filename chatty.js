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





