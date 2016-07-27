var inputField = document.querySelector("#enterMessage");
inputField.addEventListener("keypress", function(e) {
    if (event.keyCode === 13) {
        var userMessage = document.querySelector("#enterMessage").value;
        console.log(userMessage);
        var outputField = document.querySelector(".outputField");
        outputField.innerHTML += `<p>${userMessage}</p>`;
        console.log('ya')
    }
})



var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(e) {
    console.log('ta');
// document.querySelector("outputField").innerHTML = '';
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
