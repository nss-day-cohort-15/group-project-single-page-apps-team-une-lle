var inputField = document.querySelector("#enterMessage");
inputField.addEventListener("keypress", function(e) {
    if (event.keyCode === 13) {
        var userMessage = document.querySelector("#enterMessage").value;
        console.log(userMessage);
        var outputField = document.querySelector(".outputField");
        outputField.innerHTML += `<span>${userMessage}</span><button class="delete">Delete</button><br>`

        console.log('ya')
    }
})



var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(e) {
    console.log('ta');
document.querySelector(".outputField").innerHTML = '';
})

// function listenPlease() {
// document.querySelector("body").addEventListener("click", function(event) {
//   console.log(event);
// })


