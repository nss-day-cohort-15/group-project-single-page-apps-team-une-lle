var messagesLogged = [];

var inputField = document.querySelector("#enterMessage");
inputField.addEventListener("keypress", function(e) {
    if (event.keyCode === 13) {
        var userMessage = document.querySelector("#enterMessage").value;
        console.log(userMessage);
        messagesLogged.push(userMessage)
        var outputField = document.querySelector(".outputField");
        outputField.innerHTML += `<div id="outputDiv"><span id="outputSpan">${userMessage}</span><button class="delete">Delete</button></div>`

        // console.log(messagesLogged)

        inputField.value = "";
    }
})

document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
  console.log(event.target.parentElement)
  if (event.target.className.toLowerCase() ===
    "delete") {

  // var child = document.getElementById("outputSpan");
  // var parent = document.getElementById("outputDiv");
  // parent.removeChild(child);
  event.target.parentElement.remove();

  console.log(messagesLogged);
  }
})


var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(e) {
    console.log('ta');
document.querySelector(".outputField").innerHTML = '';

})


document.getElementById("darkThemeBox").addEventListener("click", function () {
  if (document.getElementById("darkThemeBox").checked === true) {

    document.getElementById("navbar").className = "navbar navbar-default navbar-fixed-top navbarDark";
    document.getElementById("body").className = "bodyDark";
    document.getElementById("enterMessage").className = "enterMessage enterMessageDark";
    document.getElementById("clearButton").style.color = "black";

  } else {

    document.getElementById("navbar").className = "navbar navbar-default navbar-fixed-top";
    document.getElementById("body").className = "";
    document.getElementById("enterMessage").className = "enterMessage";
    document.getElementById("clearButton").style.color = "black";

  }
});


document.getElementById("largeTextBox").addEventListener("click", function () {
  if (document.getElementById("largeTextBox").checked === true) {
    document.getElementById("outputField").className  = "outputField outputFieldLarge"
  } else {
    document.getElementById("outputField").className  = "outputField";
  }
});







