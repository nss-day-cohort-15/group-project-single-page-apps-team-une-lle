var inputField = document.getElementById("enterMessage");
inputField.addEventListener("keypress", function(e) {
    if (event.keyCode === 13) {
        var userMessage = document.getElementById("enterMessage").value;
        var outputField = document.getElementById("outputField");
        outputField.value = userMessage;
    }
})



var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(e) {
document.getElementById("outputField").innerHTML = '';
})

