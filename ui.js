const lookUpButton = document.getElementById("look-up");
const panel = document.getElementById("panel-container");
const goBack = document.getElementById("go-back");
const idPaste = document.getElementById("id-paste");

const idInput = document.getElementById("id-container");

const errorHeader = document.getElementById("header");

const endPoint = `https://discord-lookup-server.herokuapp.com/`;

function fetchDataByUser(id) {
    let q = new XMLHttpRequest();
    q.open("GET", `${endPoint}/${id}`);  
    q.send();

    q.onload = function() {
        let res = JSON.parse(q.responseText);
        console.log(res);
        document.getElementById("username").innerText = `Username: ${res.username}`;
        document.getElementById("profile-image").src = res.avatar + "?size=1024";
        document.getElementById("banner-color").innerText = `Banner Color: ${res.bannerColor}`;
        //document.getElementById("banner-color").style.backgroundColor = res.bannerColor;
        document.getElementById("query-id").innerText = `Query ID: ${res.query}`;
        document.getElementById("badges").innerText = `Badges: ${res.badge}`;
        document.getElementById("profile-image-link").href = res.avatar + "?size=1024"
    }
}

lookUpButton.onclick = function() {
    idPaste.className = "container hidden"
    panel.className = "container visible";
    const id = idInput.value;
    fetchDataByUser(id);
}

goBack.onclick = function() {
    idPaste.className = "container visible"
    panel.className = "container hidden";
}
