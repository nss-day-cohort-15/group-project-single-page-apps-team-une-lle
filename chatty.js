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
    list.innerHTML += `<div class="message-0"<span class="messageOutput">${message}</span><button class="delete">Delete</button></div>`
  })
}
Chatty.getPreFill(showPreFill);

document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);

  // Handle the click event on any li
  if (event.target.tagName.toLowerCase() === "span") {
    console.log("You clicked on an <li> element");
  }

  // Handle the click event on any DOM element with a certain class
  if (event.target.className === "outputField") {
    console.log("You clicked on an `article-section` element");
  }

  // Inspect the `id` property of the event target
  if (event.target.id === "message-0") {
    console.log("You clicked on the page-title element");
  }
});