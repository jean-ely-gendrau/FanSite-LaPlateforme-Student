var video = document.getElementById("background-video");
var btn = document.getElementById("btnVideo");
   

function playAndPause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause II";
    } else {
        video.pause();
        btn.innerHTML = "Play ▶";
    }
}
function getWidthSize() {
    var clientWidth = document.documentElement.clientWidth;
    
    return clientWidth;
}
function getScrollPercent() {
    var scrollTop = document.body.scrollTop;
    var windowHeight = window.innerHeight;
    var scrollHeight = document.body.scrollHeight;

    return (scrollTop / (scrollHeight - windowHeight)) * 100;
}
function showMenuNow() {
    var x = document.getElementById("WowGeek");
    if (x.className === "menuHead") {
        x.className += " responsive";
        var scrollT = getScrollPercent();
        x.style.position = "sticky";
        x.style.top = scrollT + "px";
    } else {
        x.className = "menuHead";
    }
}
