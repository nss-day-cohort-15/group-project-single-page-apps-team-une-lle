var messagesLogged = [];

var inputField = document.querySelector("#enterMessage");
inputField.addEventListener("keypress", function(e) {
    if (event.keyCode === 13) {
        var userMessage = document.querySelector("#enterMessage").value;
        console.log(userMessage);
        var outputField = document.querySelector(".outputField");
        outputField.innerHTML += `<div id="message-0"><span>${userMessage}</span><button class="delete">Delete</button></div>`
        messagesLogged.push(userMessage)
        console.log(messagesLogged)
        console.log('ya')
    }
})

document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
  if (event.target.tagName.toLowerCase() ===
    "button") {
    console.log('yes');
  }
})
  // Handle the click event on any li
  // if (event.target.tagName.toLowerCase() === "li") {
  //   console.log("You clicked on an <li> element");
  // }

// var inputField = document.querySelector("#enterMessage");
// inputField.addEventListener("keypress", function(e) {
//     if (event.keyCode === 13) {
//         var userMessage = document.querySelector("#enterMessage").value;
//         console.log(userMessage);
//         var outputField = document.querySelector(".outputField");
//         outputField.innerHTML += `<div id="message-0"><span>${userMessage}</span><button class="delete">Delete</button></div>`

//         console.log('ya')
//     }
// })

var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(e) {
    console.log('ta');
document.querySelector(".outputField").innerHTML = '';
})

// function listenPlease() {
// document.querySelector("body").addEventListener("click", function(event) {
//   console.log(event);
// })


