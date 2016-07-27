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
    list.innerHTML += `<span class="messageOutput">${message}</span><button class="delete">Delete</button>`
  })
}
Chatty.getPreFill(showPreFill);
