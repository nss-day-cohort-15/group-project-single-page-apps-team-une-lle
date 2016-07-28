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
    document.getElementById("clearButton").style.color = "white";

  }
});





