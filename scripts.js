var inputField = document.getElementById("enterMessage");
inputField.addEventListener("keypress", function(e) {
    if (event.keyCode === 13) {
        var userMessage = document.getElementById("enterMessage").value;
        var outputField = document.getElementById("output field");
        outputField.value = userMessage;
    }
})



var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(e) {
document.getElementById("outputField").innerHTML = '';
})

var mainMessage = (function () {
  var preFill = []
  return {
    getPreFill: function (callBack) {
      var xhr = new XMLHttpRequest()
        xhr.open('GET', 'messages.json')
        xhr.addEventListener('load', function() {
          JSON.parse(preFill.responseText)
          callBack(preFill)
        })
      xhr.send()
    }
  }
})

function showPreFill (messages) {
  var list = document.querySelector('.outputField')
  preFill.forEach(function (message) {
    list.innerHTML += `<span>${message}</span><button class="delete">Delete</button>`
  })
}
mainMessage.getPreFill(showPreFill);
