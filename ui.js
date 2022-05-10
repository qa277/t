const lookUpButton = document.getElementById("look-up");
const panel = document.getElementById("panel-container");
const goBack = document.getElementById("go-back");
const idPaste = document.getElementById("id-paste");

const endPoint = `https://discord.com/api/`

lookUpButton.onclick = function() {
    idPaste.className = "container hidden"
    panel.className = "container visible";
}

goBack.onclick = function() {
    idPaste.className = "container visible"
    panel.className = "container hidden";
}