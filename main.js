
// because we're not using jquery
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

document.getElementById("last-seen").innerText = "committed to 'Descenders Modkit' on 23rd January";

