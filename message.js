var Chatty = (function (oldChatty) {


    oldChatty.showPreFill = function (messages) {
    outputField = document.querySelector('.outputField')
    messages.forEach(function (message) {
    outputField.innerHTML += `<div id="outputDiv"><span id="outputSpan">${message}</span><button class="delete">Delete</button></div>`
      })
    }
  return oldChatty
})(Chatty);
Chatty.getPreFill(Chatty.showPreFill);



// function showPreFill (messages) {
//   var list = document.querySelector('.outputField')
//   messages.forEach(function (message) {
//     list.innerHTML += `<span class="messageOutput">${message}</span><button class="delete">Delete</button><br>`
//   })
// }
// Chatty.getPreFill(showPreFill);


  // return {
  //   getPreFill: function (callBack) {
  //     var xhr = new XMLHttpRequest()
  //       xhr.open('GET', 'messages.json')
  //       xhr.addEventListener('load', function(event) {
  //         var preFill = JSON.parse(event.target.responseText)
  //         callBack(preFill)
  //       })
  //     xhr.send()
  //   }
  // }