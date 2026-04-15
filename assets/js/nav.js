/* ============================================================
   Hé, curieux ! Si tu lis ça dans la console, bienvenue.
   Ce fan site a été codé par Jean-Ely Gendrau.
   Projet ? Collab ? Recrutement ? → LinkedIn :
   https://www.linkedin.com/in/jean-ely-gendrau/
   ============================================================ */
(function () {
    var banner = [
        "%c",
        "  ██╗    ██╗ ██████╗ ██╗    ██╗     ██████╗ ███████╗███████╗██╗  ██╗",
        "  ██║    ██║██╔═══██╗██║    ██║    ██╔════╝ ██╔════╝██╔════╝██║ ██╔╝",
        "  ██║ █╗ ██║██║   ██║██║ █╗ ██║    ██║  ███╗█████╗  █████╗  █████╔╝ ",
        "  ██║███╗██║██║   ██║██║███╗██║    ██║   ██║██╔══╝  ██╔══╝  ██╔═██╗ ",
        "  ╚███╔███╔╝╚██████╔╝╚███╔███╔╝    ╚██████╔╝███████╗███████╗██║  ██╗",
        "   ╚══╝╚══╝  ╚═════╝  ╚══╝╚══╝      ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝",
        ""
    ].join("\n");
    var terminal = [
        "",
        "> root@wowgeek:~$ whoami",
        "> Jean-Ely Gendrau — Développeur Full-Stack",
        "> root@wowgeek:~$ cat message.txt",
        "> Tu fouilles la console ? Respect.",
        "> Ce code source t'intéresse ? Contacte-moi :",
        ">   [LinkedIn]  https://www.linkedin.com/in/jean-ely-gendrau/",
        ">   [GitHub]    https://github.com/jean-ely-gendrau",
        "> root@wowgeek:~$ _",
        ""
    ].join("\n");
    console.log(
        banner + "%c" + terminal,
        "color:#ffd86b;font-weight:bold;text-shadow:0 0 4px #e0a020;",
        "color:#39ff14;font-family:monospace;background:#0a0a0a;padding:4px;"
    );
})();

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
