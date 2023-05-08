
// because we're not using jquery
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

document.getElementById("signature").innerText = httpGet("signature.txt");

socials = [
    {
        "logo": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "src": "https://github.com/nohumanman"
    },
    {
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png",
        "src": "https://www.linkedin.com/in/matthew-w-bayley/"
    }
]

socials.forEach(element => {
    console.log(element);
    logo = element["logo"];
    src = element["src"];
    document.getElementById("socials").innerHTML += "<a target='_blank' href='" + src + "'><img style='border-radius:5px' height='50' src='" + logo + "'/></a>&nbsp;&nbsp;";
});
